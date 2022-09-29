<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/NicolaSpadari.png',
    name: 'Nicola Spadari',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/NicolaSpadari' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/NicolaSpadari' }
    ]
  }
]
</script>

# Vue components

A Vue component at the top of the `.md` file is available in the documentation page

## Card example component

Documentation exposes `<VPTeamMembers>`:

```vue
<script setup>
    import { VPTeamMembers } from "vitepress/theme";

    const members = [
        {
            avatar: "https://github.com/NicolaSpadari.png",
            name: "...",
            title: "...",
            links: [
                { icon: "github", link: "..." },
                { icon: "linkedin", link: "..." }
            ]
        }
    ];
</script>

<!-- Then call it in the page like -->
<VPTeamMembers size="small" :members="members" />
```

<VPTeamMembers size="small" :members="members" />