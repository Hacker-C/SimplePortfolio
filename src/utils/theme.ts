import { ref } from "vue"

const hour = new Date().getHours()
const isNight = ref(!(hour >= 6 && hour <=18))

export default isNight
