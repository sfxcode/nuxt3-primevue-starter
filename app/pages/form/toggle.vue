<script setup lang="ts">
const { addElement } = useFormKitSchema()
const { t } = useI18n()

const horizontal = ref(false)
const edit = ref(true)

const schema = reactive(
  [
    addElement('h2', ['Register ', '$email']),
    addElement('h3', 'Header Text H3'),
    {
      $formkit: 'primeInputText',
      name: 'name',
      label: 'Name',
      validation: 'required',
    },
    {
      $formkit: 'primeInputText',
      name: 'email',
      label: 'Email',
      help: 'This will be used for your account.',
      validation: 'required|email',
      iconPrefix: 'pi pi-book',
    },
    {
      $formkit: 'primeTextarea',
      name: 'text',
      label: 'Text',
      validation: '',
      rows: '6',
    },
    {
      $formkit: 'primeInputNumber',
      name: 'number',
      label: 'Balance',
      validation: 'max:10000',
      useGrouping: true,
      minFractionDigits: 2,
    },
    {
      $formkit: 'primeDatePicker',
      name: 'date',
      label: 'Date',
    },
    addElement('h3', 'Useful Links'),
    {
      $formkit: 'primeOutputLink',
      name: 'field',
      label: 'Google',
      value: 'https://www.google.de',
      iconSuffix: 'pi pi-check',
      prefix: '-> ',
    },
  ],
)

const outputSchema = reactive(
  [
    addElement('h2', ['Register ', '$email']),
    addElement('h3', 'Header Text H3'),
    {
      $formkit: 'primeOutputText',
      name: 'name',
      label: 'Name',
      validation: 'required',
    },
    {
      $formkit: 'primeOutputText',
      name: 'email',
      label: 'Email',
      iconPrefix: 'pi pi-book',
    },
    {
      $formkit: 'primeOutputText',
      name: 'text',
      label: 'Text',
      class: 'text-justify',
    },
    {
      $formkit: 'primeOutputNumber',
      name: 'number',
      label: 'Balance',
      format: 'currency',
    },
    {
      $formkit: 'primeOutputDate',
      name: 'date',
      label: 'Date',
    },
    addElement('h3', 'Useful Links'),
    {
      $formkit: 'primeOutputLink',
      name: 'field',
      value: 'https://www.google.de',
      label: 'Google',
      iconSuffix: 'pi pi-check',
      prefix: '-> ',
    },
  ],
)

const data = ref({ name: 'Tom', email: 'tom@coding-universe.com', date: new Date(), number: 2222.33, text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.' })

const { showSuccessMessage } = useMessages()
async function submitHandler() {
  showSuccessMessage('Form Submitted ...', 'Form submitted successfully')
}
</script>

<template>
  <div class="card  gap-10">
    <div class="basis-1/2 md:basis-1/3">
      <h2>Data Edit</h2>
      <div class="flex gap-2 mb-4">
        Edit Mode  <ToggleSwitch v-model="edit" />
        Horizontal  <ToggleSwitch v-model="horizontal" />
      </div>
      <div class="max-w-100">
        <FormKitDataEdit
          v-if="edit"
          :data="data"
          :schema="schema"
          :submit-label="t('save')"
          :form-class="horizontal ? 'form-horizontal' : ''"
          :debug-data="true"
          @data-saved="submitHandler"
        />
        <FormKitDataView
          v-if="!edit" :data="data" :schema="outputSchema"
          :form-class="horizontal ? 'form-horizontal' : ''"
          :debug-data="true"
        />
      </div>
    </div>
  </div>
</template>
