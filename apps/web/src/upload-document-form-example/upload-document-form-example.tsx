import { FC, useState } from "react";
import { Button } from "ui-components";

import { DEFAULT_VALUES, VALIDATION_SCHEMA } from "./constants";
import { UploadFileModel } from "./types";
import useForm from "../hooks/use-form";
import Form from "../components/form";
import FileUploadInputField from "../components/form/fields/file-upload-input-field";

const UploadDocumentFormExample: FC = () => {
  const form = useForm<UploadFileModel>({
    defaultValues: DEFAULT_VALUES,
    validationSchema: VALIDATION_SCHEMA,
  });

  const [isFileSubmitted, setIsFileSubmitted] = useState<boolean>(false);

  const onSubmit = () => setIsFileSubmitted(true);

  return (
    <>
      <Form form={form} formName="example" onSubmit={onSubmit}>
        {({ control }) => (
          <>
            <FileUploadInputField fieldName="fileToUpload" control={control} />
            <Button formName="example">SUBMIT</Button>
          </>
        )}
      </Form>
      {isFileSubmitted && (
        <p className="text-color-green-500">File uploaded successfully</p>
      )}
    </>
  );
};

export default UploadDocumentFormExample;
