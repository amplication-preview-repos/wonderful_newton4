import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <NumberInput label="lat" source="lat" />
        <NumberInput label="long" source="long" />
        <TextInput label="name" source="name" />
        <TextInput label="phone" source="phone" />
        <div />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
