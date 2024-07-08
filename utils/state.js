export const isMenu = ref(false)
export const show = ref({
    ourStory: false,
    gallery: false,
    venue: false,
    map: false,
    gift: false,
    guest: false
})

export const resetShow = () => {
    show.value.ourStory = false
    show.value.gallery = false
    show.value.venue = false
    show.value.map = false
    show.value.gift = false
    show.value.guest = false
}