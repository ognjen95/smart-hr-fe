import { mixed, object, ObjectSchema } from "yup";

import { UploadFileModel } from "./types";

const DEFAULT_VALUES: UploadFileModel = {
  fileToUpload: undefined,
};

const VALIDATION_SCHEMA: ObjectSchema<UploadFileModel> = object().shape({
  fileToUpload: mixed<File>().required("Missing file to upload."),
});

export { DEFAULT_VALUES, VALIDATION_SCHEMA };
