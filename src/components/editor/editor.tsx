import dynamic from 'next/dynamic';
import { alpha } from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';

import { EditorProps } from './types';
import type { ComponentType } from 'react';
import { StyledEditor } from './styles';

const ClientEditor = dynamic<EditorProps>(() => import('./clientEditor').then(m => m as { default: ComponentType<EditorProps> }), {
  ssr: false,
  loading: () => (
    <Skeleton
      sx={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: 1,
        borderRadius: 1,
        position: 'absolute',
      }}
    />
  ),
});

export default function Editor({
  id = 'minimal-quill',
  error,
  simple = false,
  helperText,
  sx,
  ...other
}: EditorProps) {
  return (
    <>
      <StyledEditor
        sx={{
          ...(error && {
            border: (theme) => `solid 1px ${theme.palette.error.main}`,
            '& .ql-editor': {
              bgcolor: (theme) => alpha(theme.palette.error.main, 0.08),
            },
          }),
          ...sx,
        }}
      >
        <ClientEditor id={id} simple={simple} {...other} />
      </StyledEditor>
      {helperText && helperText}
    </>
  );
}
