import { useStorage, createSharedComposable } from '@vueuse/core'

const useSharedStorage = createSharedComposable(useStorage)
let isNight = useSharedStorage('theme', false)

export default isNight
