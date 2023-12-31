import { w } from 'windstitch';

export const ContainerRegistrations = w.div(`
  h-screen
  bg-dark-blue
  flex
  flex-col
  items-center
`)

export const LogoStyle = w.div(`
flex
items-center
justify-center
pt-10
pb-6
`);

export const LogoImg = w.img(`
h-52
`)

export const FormStyle = w.form(`
w-full 
flex
flex-col
items-center
`)

export const InputForm = w.input(`
border-none
bg-white
rounded-md
w-80
h-12
mb-1.5
text-xl
pl-1.5
`)

export const ButtonForm = w.button(`
  rounded-md
  bg-light-green
  border-light-green
  font-semibold
  w-72
  h-11
  text-white
  text-center
  font-normal
  flex
  items-center
  justify-center
  mt-1.5
`);

export const LinkStyle = w.div(`
  flex
  items-center
  justify-center;
  text-light-green
  underline
  mt-1.5
  mb-7
`);