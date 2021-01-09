import styled from "styled-components";
import { useRouter } from 'next/router';
import Link from "next/link";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale } = router;

  const handleLanguageChange = (e) => {
    const locale = e.target.value;
    localStorage.setItem('locale', locale)
    router.push('/', '/', {locale})
  }

  return (
    <>
    <select onChange={handleLanguageChange} defaultValue={'en'} >
      <option value={'en'}>En</option>
      <option value={'fr'}>Fr</option>
      <option value={'sp'}>Sp</option>
    </select>
    </>
  );
}
