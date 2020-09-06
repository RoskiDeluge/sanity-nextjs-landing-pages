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
                  buildHookId: '5f54a2f81e2b2fb1a6b67428',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-7gqrm6ag',
                  apiId: '8936fbd6-e74c-4415-ab44-dd0d7184a114'
                },
                {
                  buildHookId: '5f54a2f8c1f097feb915854e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-jcgq6cru',
                  apiId: '5c463279-2950-4f32-b13f-178c009b0940'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RoskiDeluge/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-jcgq6cru.netlify.app', category: 'apps'}
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
