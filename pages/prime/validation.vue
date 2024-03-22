<script setup lang='ts'>
import { FormKitSchema } from '@formkit/vue'
import { ref, reactive } from 'vue'
import { useFormKitSchema } from '@sfxcode/formkit-primevue/composables'

const { addElement, addList, addListGroup, addComponent, addListGroupFunctions } = useFormKitSchema()
function addFlexElement (children: any[]) {
  return addElement('div', children, { class: 'min-w-50rem flex gap-4' })
}

function addGroupButtons () {
  const addButtonComponent = (onClick: string = '', label: string = '', icon: string = '', severity: string = '', render: string = 'true', styleClass: string = 'p-button-sm ml-2'): object => {
    return addComponent('Button', { onClick, label, icon, class: styleClass, severity }, render)
  }

  return addElement('div', [
    addButtonComponent('$removeNode($node, $index)', '', 'pi pi-times', 'danger'),
    addButtonComponent('$copyNode($node, $index)', '', 'pi pi-plus'),
    addButtonComponent('$moveNodeUp($node, $index)', '', 'pi pi-arrow-up', 'secondary', '$index != 0'),
    addElement('span', [], { class: 'ml-2 mr-10' }, '$index == 0'),
    addButtonComponent('$moveNodeDown($node, $index)', '', 'pi pi-arrow-down', 'secondary', '$index < $node.value.length -1'),
    addElement('span', [], { class: 'ml-2 mr-10' }, '$index == $node.value.length -1')
  ], { class: 'pt-6' })
}

const options = [
  { label: 'Every page load', value: 'refresh' },
  { label: 'Ever hour', value: 'hourly' },
  { label: 'Every day', value: 'daily' }
]

const data = ref()

function createDefaultValue (): object {
  return { name: 'Sword', damage: '2D20' }
}

onMounted(() => {
  const defaultData = { email: 'tom@mydomain.com', additionalMails: [{ email: 'peter@mydomain.com' }, { email: 'paul@mydomain.com' }], myCalendar: new Date() }
  addListGroupFunctions(defaultData, { email: 'name@mydomain.com' })
  data.value = defaultData
})

const schema = reactive(
  [
    addElement('h2', ['Validation with FormKit']),
    addElement('h3', ['Inputs from PrimeVue']),
    {
      $formkit: 'primeInputText',
      name: 'email',
      label: 'Email',
      help: 'This will be used for your account.',
      validation: 'required|email'

    },
    addList('additionalMails', [
      addFlexElement([
        addElement('div', ['Additional Mails'], { class: 'text-xl mb-2' }),
        addComponent('Button', { onClick: '$addNode($node)', label: 'Add', class: 'p-button-sm', icon: 'pi pi-plus' }, '$node.value.length == 0')
      ]),
      addListGroup(
        [
          addFlexElement([
            {
              $formkit: 'primeInputText',
              label: 'Additional Mail',
              name: 'email'
            },
            addGroupButtons()
          ])
        ]
      )
    ], true, 'true'),

    {
      $formkit: 'primeTextarea',
      name: 'myText',
      label: 'Text',
      rows: '5'
    },
    {
      $formkit: 'primeCalendar',
      name: 'myCalendar',
      label: 'Calendar',
      validation: '',
      showIcon: true

    },
    {
      $formkit: 'primePassword',
      name: 'password',
      label: 'Password',
      help: 'Enter your new password.',
      validation: 'required|length:5,16'
    },
    {
      $formkit: 'primePassword',
      name: 'password_confirm',
      label: 'Confirm password',
      toggleMask: true,
      feedback: false,
      help: 'Enter your new password again to confirm it.',
      validation: 'required|confirm',
      validationLabel: 'password confirmation'
    },
    {
      $formkit: 'primeCheckbox',
      name: 'eu_citizen',
      id: 'eu',
      label: 'Are you a european citizen?'

    },
    {
      $formkit: 'primeDropdown',
      if: '$eu_citizen', // 👀 Oooo, conditionals!
      name: 'cookie_notice',
      label: 'Cookie notice frequency',
      value: 'hourly',
      showClear: false,
      filter: false,
      optionLabel: 'label',
      optionValue: 'value',
      options,
      help: 'How often should we display a cookie notice?',
      class: 'test'

    },
    {
      $formkit: 'primeSlider',
      name: 'slider',
      label: 'Max messages',
      style: 'width: 200px;margin-top: 6px;margin-bottom: 4px',
      min: 5,
      step: 5,
      value: 10
    },
    {
      $formkit: 'primeChips',
      name: 'chips',
      label: 'Use Chips'
    },
    {
      $formkit: 'primeKnob',
      name: 'knob',
      label: 'Use Knob',
      value: 50
    }
  ]
)

const submitHandler = async () => {
  // Lets pretend this is an ajax request:
  await new Promise(resolve => setTimeout(resolve, 1000))
}
</script>
<template>
  <div class="card flex flex-wrap gap-16">
    <div class="basis-1/2 md:basis-1/3">
      <span class="" />
      <div v-if="data" class="myFormkit max-w-25rem">
        <FormKit
          id="form"
          v-model="data"
          type="form"
          :submit-attrs="{
            inputClass: 'p-button p-component',
            wrapperClass: '',
            outerClass: ''
          }"
          @submit="submitHandler"
        >
          <FormKitSchema :schema="schema" :data="data" />
        </FormKit>
      </div>
    </div>
    <div class="basis-1/2 md:basis-1/3">
      <h2>Formkit Debug</h2>
      <div class="text-xl">
        More examples: <a href="https://formkit-primevue.netlify.app/">Formkit PrimeVue Demo</a>
      </div>
      <h3>Data</h3>
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>
<style lang='scss' scoped>

.myFormkit {

}

</style>
