import classNames from 'classnames';
import Image from 'next/image';
import { FC, memo, MouseEvent, useCallback, useEffect, useRef, useState } from 'react';

import { isMobile } from '../../config';
import { portfolioItems, SectionId } from '../../data/data';
import { PortfolioItem } from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Check out some of my work</h2>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => {
            const { title, image } = item;
            return (
              <div key={`${title}-${index}`}>
                <div
                  className={classNames(
                    'relative h-32 w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                  )}>
                  <Image alt={title} className="h-full w-full" placeholder="blur" src={image} />
                  <ItemOverlay item={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{ item: PortfolioItem }> = memo(({ item: { url, title, summary, bullets, skills, githubUrl } }) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Avoid hydration styling errors by setting mobile in useEffect
    if (isMobile) {
      setMobile(true);
    }
  }, []);
  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
      }
    },
    [mobile, showOverlay],
  );

  return (
    <div
      className={classNames(
        'absolute inset-0 h-full w-full bg-gray-900 transition-all duration-300',
        { 'opacity-0 hover:opacity-80': !mobile },
        showOverlay ? 'opacity-80' : 'opacity-0',
      )}
      onClick={handleItemClick}
      ref={linkRef}>
      <div className="relative h-full w-full p-4">
        <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
          <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
          <p className="text-xs text-white opacity-100 sm:text-sm">{summary}</p>
          <ul className="text-xs text-white opacity-100 sm:text-sm list-disc list-inside">
            {bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1 mt-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-white/20 text-white text-xs px-2 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute bottom-1 right-1 flex gap-2">
          <a
            href={url}
            target="_blank"
            className="bg-blue-500 text-white text-xs px-2 py-1 rounded hover:bg-blue-600"
            onClick={(e) => e.stopPropagation()}>
            Demo
          </a>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              className="bg-gray-700 text-white text-xs px-2 py-1 rounded hover:bg-gray-800"
              onClick={(e) => e.stopPropagation()}>
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
});
