import { InputBox } from 'components';
import * as S from './styles';

interface Prop {
  setCondition: Function;
  condition: boolean;
}

export const Condition = ({ setCondition, condition }: Prop) => {
  const toggleIsNew = () => {
    setCondition(!condition);
  };

  return (
    <InputBox name="condition" title="상품 상태">
      <S.Buttons>
        <S.Button type="button" selected={condition} onClick={toggleIsNew}>
          새상품
        </S.Button>
        <S.Button type="button" selected={!condition} onClick={toggleIsNew}>
          중고
        </S.Button>
      </S.Buttons>
    </InputBox>
  );
};
