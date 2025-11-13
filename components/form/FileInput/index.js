import { forwardRef } from 'react'
import Image from '@atoms/Image'
import * as S from './styled'
import UploadFileIcon from '@svg/UploadFileIcon.svg'
import InputErrors from '@form/components/InputErrors'

const FileInput = forwardRef(({ fileName, error, accept = '.pdf', ...rest }, ref) => {
  return (
    <S.InputFileContainer>
      <input
        ref={ref}
        {...rest}
        type='file'
        accept={accept}
        style={{
          width: '100%',
          position: 'absolute',
          zIndex: 2,
          top: '0',
          padding: '13px 0',
          opacity: '0',
          cursor: 'pointer'
        }}
      />

      <S.FakeInputFile>
        <input
          type='text'
          placeholder='Adjuntar archivo'
          value={fileName}
          readOnly
          className='fakeInput'
        />
        {!fileName && (
          <S.ImageContainer>
            <Image src={UploadFileIcon} alt='icono adjuntar archivo' />
          </S.ImageContainer>
        )}
      </S.FakeInputFile>

      <InputErrors errors={error} />
    </S.InputFileContainer>
  )
})

export default FileInput
