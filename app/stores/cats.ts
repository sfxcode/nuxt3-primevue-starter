export function useCatsStore() {
  const staleTime: number = 60 * 1000

  const { data: catsFacts } = useQuery({
    key: () => ['cats-facts'],
    query: () => fetch('https://catfact.ninja/facts').then(res => res.json()).then((res: any) => {
      return res.data
    }),
    staleTime,
  })

  return { catsFacts }
}
