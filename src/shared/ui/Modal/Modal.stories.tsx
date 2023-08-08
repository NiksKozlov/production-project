import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from 'shared/ui/Modal/Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: '-Hi my name is Tom! -How are you? -Im good :D BLABLA BLABLA BLABLA BLABLABLA BLABLA BLABLABLA BLABLA BLABLABLA BLABLA',
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: '-Hi my name is Tom! -How are you? -Im good :D BLABLA BLABLA BLABLA BLABLABLA BLABLA BLABLABLA BLABLA BLABLABLA BLABLA',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
