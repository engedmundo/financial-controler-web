import * as Yup from 'yup';

export const transactionCSVFormValidationSchema = Yup.object({
  csvFile: Yup.mixed()
  .required("É necessário selecionar um arquivo CSV")
  .test('fileType', 'Somente arquivos CSV são permitidos', (value) => {
    if (value) {
      // return value.type === 'text/csv';
      return false
    }
    return true;
  }),
})