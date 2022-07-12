// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../components/design-system/Buttons";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => (
  <Button style="primary" type="button" disabled={false}>
    Button
  </Button>
);
export const Secondary: ComponentStory<typeof Button> = () => (
  <Button style="secondary" type="button" disabled={false}>
    Button
  </Button>
);
export const Tertiary: ComponentStory<typeof Button> = () => (
  <Button style="tertiary" type="button" disabled={false}>
    Button
  </Button>
);
