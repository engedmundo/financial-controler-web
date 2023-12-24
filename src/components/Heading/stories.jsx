import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Logo',
  },
};

export const Template = (args) =>{
  return (
  <div>
    <Heading {...args} />
  </div>
  )
};
