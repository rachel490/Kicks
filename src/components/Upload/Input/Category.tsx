import { InputBox } from 'components';

interface Prop {
  category: string;
  setCategory: Function;
}

export const Category = ({ category, setCategory }: Prop) => {
  const categoryList = [
    '구두/로퍼',
    '워커/부츠',
    '샌들/슬리퍼',
    '스니커즈',
    '기타'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  return (
    <InputBox name="cateogory" title="카테고리">
      <select id="category" defaultValue="" required onChange={handleChange}>
        <option value="" disabled>
          카테고리를 선택해주세요.
        </option>
        {categoryList.map((name) => (
          <option key={name} value={name} >
            {name}
          </option>
        ))}
      </select>
    </InputBox>
  );
};
