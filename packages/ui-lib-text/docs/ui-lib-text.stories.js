import React from "react";
// We want to always get from source
import { Text } from "../lib/ui-lib-text";

export default { title: "Text" };

export const Body = () => <Text>Body Text</Text>;
export const Hero = () => <Text variant='Hero'>Hero Text</Text>;
export const Heading = () => <Text variant='Heading'>Heading Text</Text>;
