import styled from "styled-components";
import { useRouter } from 'next/router';
import Link from "next/link";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale } = router;

  const handleLanguageChange = (e) => {
    const locale = e.target.value;
    router.push('/', '/', {locale})
  }
  
  return (
    <>
    <select onChange={handleLanguageChange} defaultValue={'en-US'} >
      <option value={'en-US'}>En</option>
      <option value={'fr'}>Fr</option>
      <option value={'sp'}>Sp</option>
    </select>
    </>
  );
}
