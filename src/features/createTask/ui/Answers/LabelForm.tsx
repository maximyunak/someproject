import { Input } from '@mui/material';
import { ChangeEvent, FC, MutableRefObject, useState } from 'react';

import ClearIcon from '@mui/icons-material/Clear';

interface labelFormProps {
  el: string;
  id: number;
  onChange: (value: string, id: number) => void;
  handleDeleteVariant: (id: number) => void;
  inputRefs: MutableRefObject<HTMLInputElement[]>;
}

export const LabelForm: FC<labelFormProps> = ({
  el,
  id,
  onChange,
  inputRefs,
  handleDeleteVariant,
}) => {
  const [answerTitle, setAnswerTitle] = useState(el);

  const handleBlur = () => {
    onChange(answerTitle, id);
  };

  return (
    <div>
      <Input
        value={answerTitle}
        onChange={(e) => setAnswerTitle(e.target.value)}
        onBlur={handleBlur}
        inputRef={(ref) => {
          if (ref) {
            inputRefs.current[id] = ref; // Сохраняем реф в массив
          }
        }}
        sx={{
          fontSize: 16,
          '&:after': {
            borderBottomColor: 'var(--purple)',
          },
          '&:before': {
            borderBottomColor: 'transparent',
          },
          width: '95%',
        }}
      />
      <ClearIcon
        sx={{ cursor: 'pointer', color: 'var(--add-text)', size: '13px' }}
        className="clear-icon"
        onClick={() => handleDeleteVariant(id)}
      />
    </div>
  );
};
