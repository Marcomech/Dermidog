import { ReactNode, createContext, useState } from "react";

interface FormData {
  [key: string]: string;
}

interface FormContextValue {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export const FormContext = createContext<FormContextValue>({
  formData: {},
  setFormData: () => { },
});

export function FormContextProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<FormData>({
    'Nombre': "",
    'Raza': "",
    'Sexo': "",
    'Edad': "",
    'Area': "",
    'Prurito': "",
    'Seborrea': "",
    'Simetria': "",
    'LesionesElementales': "",
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
}
