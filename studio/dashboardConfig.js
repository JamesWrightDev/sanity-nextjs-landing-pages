export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e2759302f02312c538b3e7a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-efohfd29',
                  apiId: 'a2783266-aa28-4f76-8590-4d0245561334'
                },
                {
                  buildHookId: '5e2759305b1df20a77a5c53a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-2mhcct2h',
                  apiId: '1bc3d98c-f97b-47d1-906e-ebd7e8e76dab'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JamesWrightDev/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-2mhcct2h.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
