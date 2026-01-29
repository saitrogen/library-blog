import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Library } from 'lucide-react';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-2 font-semibold">
          <Library className="w-5 h-5 text-[#681e26]" />
          Amal Library
        </span>
      ),
    },
    links: [
      {
        text: 'Resources',
        url: '/resources-hub',
      },
      {
        text: 'Student Zone',
        url: '/student-zone',
      },
      {
        text: 'Services',
        url: '/services',
      },
    ],
  };
}
