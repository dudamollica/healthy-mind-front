import { w } from 'windstitch';

export const TodayContainer =w.div(`
pt-32
pl-4
pb-28
bg-ligth-grey
box-border
flex
flex-col
items-center
`)

export const DivForm = w.div(`
text-white
bg-dark-blue
w-5/6
rounded-lg
mb-4
pb-4
pr-1.5
pl-1.5
`)

export const FormStyle = w.form(`
font-white
text-center
w-full
flex
flex-col
items-center
`)

export const TitleStyle = w.h1(`
text-xl
font-bold
text-light-green
pl-2.5
pt-2.5
`)

export const InputStyle = w.input(`
bg-white
text-[#000000]
rounded-md
h-11
mb-1.5
text-xl
pl-2
`)

export const LabelStyle = w.label(`
mb-2
mt-1.5
text-lg
`)

export const ButtonStyle = w.button(`
rounded
w-36
h-11
mt-3
text-white
font-bold
border
bg-light-green
text-xl
text-center
flex
justify-center
items-center
cursor-pointer
`)

export const DivEmotion = w.div(`
flex
justify-center
mb-1.5
mt-3.5
flex-wrap
`)

export const InputEmotion = w.input(`
w-full
rounded
text-[#000000]
`)

export const EmotionImg = w.img(`
w-12
mr-3.5
mb-3.5
cursor-pointer
`)

export const OptionsDiv = w.div(`
flex
`)

export const Option = w.span(`
w-12
mr-3.5
mb-3.5
border
cursor-pointer
`)
