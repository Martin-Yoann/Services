# Asset register

Updated 2026-10-29.

| Asset | Source and permission | Hosting |
| --- | --- | --- |
| Inter normal and italic variable fonts | Google Fonts official repository, ofl/inter; SIL Open Font License 1.1 included as public/fonts/Inter-OFL.txt | Bundled through next/font/local |
| Inter Tight variable font | Google Fonts official repository, ofl/intertight; SIL Open Font License 1.1 included as public/fonts/InterTight-OFL.txt | Bundled through next/font/local |
| search-network.svg and search-icon.svg | Original geometric SVG artwork created for this remediation; no third-party images copied | public/compliance |

Font source repository: https://github.com/google/fonts/tree/main/ofl/inter and https://github.com/google/fonts/tree/main/ofl/intertight.

All meetsocial images and the hotlinked Pexels image were replaced with original geometric SVG artwork. No licensing claim is made about the removed images. Existing pre-remediation local imagery is unchanged; its licensing records remain a business-owned verification item.

## Industry Solutions image replacement on 2026-10-29

The four industry backgrounds now use downloaded Pexels photographs hosted under public/images/industries. Individual source pages, photographer names, license link, retrieval date and local file hashes are recorded in industry-image-sources-2026-10-29.json. Pexels pages identified each selected image as Free at review time. Reviewed license: https://www.pexels.com/license/ . The module uses these photographs as industry illustrations and does not represent depicted people, premises or brands as clients or endorsers.

Previous numbered JPG/WebP files were removed from public after checking that no other app component referenced them. Their historical copies remain available in Git. No Pexels requests are needed at visitor page load.

Validation for this replacement: production build/type check and component ESLint passed; browser checked all four desktop hover states and four 375px mobile states, with local image HTTP 200, no Pexels network calls, no horizontal overflow and no page script errors.
