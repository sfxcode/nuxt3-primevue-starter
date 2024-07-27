<script setup lang='ts'>
import { FormKitSchema } from '@formkit/vue'
import { reactive, ref } from 'vue'
import { useFormKitRepeater, useFormKitSchema } from '@sfxcode/formkit-primevue/composables'

const { addElement, addList, addListGroup } = useFormKitSchema()
const { addListGroupFunctions, addGroupButtons, addInsertButton } = useFormKitRepeater()

const options = [
  { label: 'Every page load', value: 'refresh' },
  { label: 'Ever hour', value: 'hourly' },
  { label: 'Every day', value: 'daily' },
]

const data = ref()

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
      validation: 'required|email',
      outerClass: 'col-7',
    },
    addList('additionalMails', [
      addElement('div', ['Additional Mail'], { class: 'text-xl' }),
      addInsertButton(),
      addListGroup(
        [
          {
            $formkit: 'primeInputText',
            label: 'Additional Mail',
            name: 'email',
            outerClass: 'col-6',

          },
          addGroupButtons('', 'col-6'),
        ],
      ),
    ], true, 'true'),

    {
      $formkit: 'primeTextarea',
      name: 'myText',
      label: 'Text',
      rows: '5',
    },
    {
      $formkit: 'primeDatePicker',
      name: 'myDatePicker',
      label: 'Date Picker',
      validation: '',
      showIcon: true,

    },
    {
      $formkit: 'primePassword',
      name: 'password',
      label: 'Password',
      help: 'Enter your new password.',
      validation: 'required|length:5,16',
      outerClass: 'col-6',
    },
    {
      $formkit: 'primePassword',
      name: 'password_confirm',
      label: 'Confirm password',
      toggleMask: true,
      feedback: false,
      help: 'Enter your new password again to confirm it.',
      validation: 'required|confirm',
      validationLabel: 'password confirmation',
      outerClass: 'col-6',
    },
    {
      $formkit: 'primeCheckbox',
      name: 'eu_citizen',
      id: 'eu',
      label: 'Are you a european citizen?',
      outerClass: 'col-6',
    },
    {
      $formkit: 'primeSelect',
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
      outerClass: 'col-6',
    },
    {
      $formkit: 'primeSlider',
      name: 'slider',
      label: 'Max messages',
      style: 'width: 200px;margin-top: 6px;margin-bottom: 4px',
      min: 5,
      step: 5,
      value: 10,
    },
    {
      $formkit: 'primeKnob',
      name: 'knob',
      label: 'Use Knob',
      value: 50,
    },
  ],
)

async function submitHandler() {
  // Lets pretend this is an ajax request:
  await new Promise(resolve => setTimeout(resolve, 1000))
}
</script>

<template>
  <div class="card flex flex-wrap gap-4">
    <div class="basis-1/3 md:basis-1/4">
      <div v-if="data" class="min-w-25rem">
        <FormKit
          id="form"
          v-model="data"
          type="form"
          :submit-attrs="{
            inputClass: 'p-button p-component',
            wrapperClass: '',
            outerClass: '',
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
