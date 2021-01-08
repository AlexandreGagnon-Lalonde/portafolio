import styled from "styled-components";
import { useRouter } from 'next/router';
import Link from "next/link";

export default function LanguageSwitcher() {
let router = useRouter();
  return (
    <>
    <ul style={{ color: 'red'}}>
      {router.locales.map(locale => {
        return (
          <li><Link href={router.asPath} locale={locale}><a>{locale}</a></Link></li>)
      })}
    </ul>
    </>
  );
}
