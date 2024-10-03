export function useNavigationMenu() {
  const separator = h('hr')

  const menu = computed(() => {
    return [
      {
        href: '/',
        title: 'Home',
        icon: 'pi pi-fw pi-home',
      },
      {
        component: markRaw(separator),
      },
      {
        title: 'PrimeVue',
        icon: 'pi pi-prime',
        child: [
          { href: '/prime/datatable', title: 'DataTable' },
          { href: '/prime/messages', title: 'Messages' },
        ],
      },
      {
        title: 'Forms',
        icon: 'pi pi-check-square',
        child: [
          { href: '/form', title: 'Basic' },
          { href: '/form/toggle', title: 'Edit / View' },
        ],
      },
      {
        title: 'UI',
        icon: 'pi pi-image',
        child: [
          { href: '/ui/uno', title: 'UnoCSS' },
          { href: '/ui/icons', title: 'Icons' },
          { href: '/ui/tiptap', title: 'TipTap' },
        ],
      },
      {
        title: 'Data',
        icon: 'pi pi-server',
        child: [
          { href: '/data/stores', title: 'Stores' },
          { href: '/data/i18n', title: 'Localization' },
          { href: '/data/server', title: 'Server' },
        ],
      },
      {
        title: 'Content',
        icon: 'pi pi-book',
        child: [
          { href: '/cms/markdown', title: 'Markdown' },
          { href: '/cms/component', title: 'Component' },
        ],
      },

    ]
  })

  return { menu }
}
