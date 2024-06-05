import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProfileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <NumberInput label="lat" source="lat" />
        <NumberInput label="long" source="long" />
        <TextInput label="name" source="name" />
        <TextInput label="phone" source="phone" />
        <div />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Create>
  );
};
