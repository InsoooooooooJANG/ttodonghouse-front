<template>
    <div class="home"
        id="home"
        :class="[{'collapsed' : collapsed}, {'onmobile' : isOnMobile}]">
        <router-view />
        
        <sidebar-menu 
            :menu="menu"
            :collapsed="collapsed"
            :theme="selectedTheme"
            :show-one-child="true"
            @toggle-collapse="onToggleCollapse"
            @item-click="onItemClick"/>
        <div
            v-if="isOnMobile && !collapsed"
            class="sidebar-overlay"
            @click="collapsed = true"
        />
    </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
        collapsed: false,
        themes: [
        {
          name: 'Default theme',
          input: ''
        },
        {
          name: 'White theme',
          input: 'white-theme'
        }
        ],
        selectedTheme: 'dark-theme',
        isOnMobile: false,
        menu: [
                    {
                        header: true,
                        title: 'Main Navigation',
                        hiddenOnCollapse: true
                    },
                    {
                        href: '/',
                        title: 'HOME',
                        icon: 'fas fa-home'
                    },
                    {
                        href: '/pics',
                        title: 'PICS',
                        icon: 'fas fa-cut',
                        child: [
                            {
                                href: '/pics/all',
                                title: 'ALL'
                            },
                            {
                                href: '/pics/short',
                                title: 'SHORT'
                            },
                            {
                                href: '/pics/midium',
                                title: 'MIDIUM'
                            },
                            {
                                href: '/pics/long',
                                title: 'LONG'
                            },
                            {
                                href: '/pics/max',
                                title: 'MAX'
                            }
                        ]
                    },
                    {
                        href: '/',
                        title: 'RESERVATION',
                        icon: 'fas fa-phone'
                    },
                    {
                        href: '/',
                        title: 'QnA',
                        icon: 'fas fa-question'
                    },
                    {
                        href: '/',
                        title: 'About',
                        icon: 'fas fa-cat'
                    }
                ]
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    onToggleCollapse (collapsed) {
        console.log(collapsed)
        this.collapsed = collapsed
    },
    onItemClick (event, item, node) {
        console.log('onItemClick')
        // console.log(event)
        // console.log(item)
        // console.log(node)
    },
    onResize () {
        if (window.innerWidth <= 767) {
        this.isOnMobile = true
        this.collapsed = true
        } else {
        this.isOnMobile = false
        this.collapsed = false
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home {
    text-align: center;
    padding-left: 350px;
    transition: 0.3s ease;
}
#home.collapsed {
    padding-left: 50px;
}
#home.onmobile {
    padding-left: 50px;
}

.sidebar-overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0.5;
    z-index: 900;
}

.home {
    padding: 50px;
}

pre {
    font-family: Consolas, monospace;
    color: #000;
    background: #fff;
    border-radius: 2px;
    padding: 15px;
    line-height: 1.5;
    overflow: auto;
}

</style>
