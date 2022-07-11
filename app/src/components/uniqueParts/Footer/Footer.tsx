import Link from 'next/link';

/**
 * フッターコンポーネント
 * @returns コンポーネント
 */
const Footer = () => (
  <footer>
    <div className="py-[20px] bg-[#222]">
      <div className="px-[15px] mx-auto max-w-[1230px]">
        <nav>
          <ul className="flex justify-around">
            <li className="flex-1 last:mb-0 text-center">
              <div className="block relative after:absolute before:absolute after:top-[50%] before:top-[50%] after:right-0 before:left-0 py-[15px] mb-[10px] before:w-[1px] after:w-[1px] before:h-[15px] after:h-[15px] text-white hover:underline focus:underline decoration-[none] before:bg-current after:bg-current before:translate-y-[-50%] after:translate-y-[-50%]">
                <Link href="/">ホーム</Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div className="py-[20px] bg-[#222] border-t-[1px] border-t-[#777]">
      <div className="px-[15px] mx-auto max-w-[1230px] ">
        <small className="block text-[12px] text-center text-[#ddd]">
          Powered by nne
        </small>
      </div>
    </div>
  </footer>
);

export default Footer;
