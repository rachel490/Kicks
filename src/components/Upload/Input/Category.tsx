import { InputBox } from 'components';

export const Category = () => {
  return (
    <InputBox name="cateogory" title="카테고리">
      <select id="category" defaultValue="" required>
        <option value="" disabled>
          카테고리를 선택해주세요.
        </option>
        <option value="구두,로퍼">구두 / 로퍼</option>
        <option value="워커/부츠">워커 / 부츠</option>
        <option value="샌들/슬리퍼">샌들 / 슬리퍼</option>
        <option value="스니커즈">스니커즈</option>
        <option value="spider">기타</option>
      </select>
    </InputBox>
  );
};
