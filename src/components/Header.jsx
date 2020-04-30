import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Search from './Search'
export default function Home() {
  return (
    <>
    <header className="header">
      <div className="container">
        <div class="header--kate">
            <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 14H4V26H2C1.73727 26.0003 1.47706 25.9488 1.23426 25.8484C0.991469 25.748 0.770865 25.6007 0.585085 25.4149C0.399305 25.2291 0.251998 25.0085 0.1516 24.7657C0.0512024 24.5229 -0.000313914 24.2627 1.43908e-06 24V16C-0.000313914 15.7373 0.0512024 15.4771 0.1516 15.2343C0.251998 14.9915 0.399305 14.7709 0.585085 14.5851C0.770865 14.3993 0.991469 14.252 1.23426 14.1516C1.47706 14.0512 1.73727 13.9997 2 14ZM34 11V28C33.999 29.0605 33.5772 30.0774 32.8273 30.8273C32.0774 31.5772 31.0606 31.999 30 32H10C8.93946 31.999 7.92266 31.5772 7.17274 30.8273C6.42282 30.0774 6.00105 29.0605 6.00001 28V11C5.99979 10.3433 6.12898 9.69306 6.38017 9.08633C6.63137 8.47961 6.99966 7.92833 7.464 7.46399C7.92833 6.99965 8.47961 6.63137 9.08634 6.38017C9.69306 6.12897 10.3433 5.99979 11 6H18V2C18 1.46957 18.2107 0.960859 18.5858 0.585786C18.9609 0.210714 19.4696 0 20 0C20.5304 0 21.0392 0.210714 21.4142 0.585786C21.7893 0.960859 22 1.46957 22 2V6H29C29.6567 5.99979 30.307 6.12897 30.9137 6.38017C31.5204 6.63137 32.0717 6.99965 32.536 7.46399C33.0004 7.92833 33.3687 8.47961 33.6199 9.08633C33.8711 9.69306 34.0002 10.3433 34 11ZM16.5 16C16.5 15.5055 16.3534 15.0222 16.0787 14.6111C15.804 14.2 15.4135 13.8795 14.9567 13.6903C14.4999 13.5011 13.9972 13.4516 13.5123 13.548C13.0273 13.6445 12.5819 13.8826 12.2322 14.2322C11.8826 14.5819 11.6445 15.0273 11.548 15.5123C11.4516 15.9972 11.5011 16.4999 11.6903 16.9567C11.8795 17.4135 12.2 17.804 12.6111 18.0787C13.0222 18.3534 13.5056 18.5 14 18.5C14.3283 18.5 14.6534 18.4354 14.9567 18.3097C15.2601 18.1841 15.5357 18 15.7678 17.7678C16 17.5357 16.1841 17.2601 16.3098 16.9567C16.4354 16.6534 16.5 16.3283 16.5 16ZM16 24H12V26H16V24ZM22 24H18V26H22V24ZM28.5 16C28.5 15.5055 28.3534 15.0222 28.0787 14.6111C27.804 14.2 27.4135 13.8795 26.9567 13.6903C26.4999 13.5011 25.9972 13.4516 25.5123 13.548C25.0273 13.6445 24.5819 13.8826 24.2323 14.2322C23.8826 14.5819 23.6445 15.0273 23.5481 15.5123C23.4516 15.9972 23.5011 16.4999 23.6903 16.9567C23.8795 17.4135 24.2 17.804 24.6111 18.0787C25.0222 18.3534 25.5056 18.5 26 18.5C26.3283 18.5 26.6534 18.4354 26.9568 18.3097C27.2601 18.1841 27.5357 18 27.7678 17.7678C28 17.5357 28.1841 17.2601 28.3098 16.9567C28.4354 16.6534 28.5 16.3283 28.5 16ZM28 24H24V26H28V24ZM40 16V24C40.0003 24.2627 39.9488 24.5229 39.8484 24.7657C39.748 25.0085 39.6007 25.2291 39.4149 25.4149C39.2292 25.6007 39.0086 25.748 38.7658 25.8484C38.523 25.9488 38.2628 26.0003 38 26H36V14H38C38.2628 13.9997 38.523 14.0512 38.7658 14.1516C39.0086 14.252 39.2292 14.3993 39.4149 14.5851C39.6007 14.7709 39.748 14.9915 39.8484 15.2343C39.9488 15.4771 40.0003 15.7373 40 16Z" fill="white"/>
            </svg>
            <span>Kate</span>
        </div>
        <Search/>
        <div class="header--user">
          <span>Alex</span>
          <FontAwesomeIcon className="icon" icon={faUserCircle} size="2x"/>
        </div>
      </div>
    </header>
    </>
  );
}
