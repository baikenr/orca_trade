import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'Main',
		meta: { public: true },
		component: () => import('@/pages/Index.vue'),
		children: [
			{
				path: '',
				redirect: '/trade'
			},
			{
				path: 'trade',
				name: 'Trade',
				meta: { public: true },
				component: () => import('@/components/SwapCard.vue')
			},
			{
				path: 'pools',
				name: 'Pools',
				meta: { public: true },
				component: () => import('@/components/PoolsCard.vue')
			},
			{
				path: 'portfolio',
				name: 'Portfolio',
				meta: { public: true },
				component: () => import('@/components/PortfolioCard.vue')
			},
			{
				path: 'stake',
				name: 'Stake',
				meta: { public: true },
				component: () => import('@/components/StakeCard.vue')
			},
			{
				path: 'wavebreak',
				name: 'Wavebreak',
				meta: { public: true },
				component: () => import('@/components/WavebreakCard.vue')
			},
			{
				path: 'more',
				name: 'More',
				meta: { public: true },
				component: () => import('@/components/MoreCard.vue')
			}
		]
	}
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})

// router.beforeEach((to, from, next) => {
// 	const isAuthenticated = !!sessionStorage.getItem('token');

// 	if (to.meta.public) {
// 		next();
// 	} 
// 	else if (isAuthenticated) {
// 		next();
// 	} 
// 	else {
// 		next({ path: '/login', query: { redirect: to.fullPath } });
// 	}
// });

const disabledRoutes = ['Pools', 'Stake', 'Portfolio', 'Wavebreak', 'More']

router.beforeEach((to, from, next) => {
  if (disabledRoutes.includes(to.name)) {
    return next(false) // запрещаем
  }

  next() // разрешаем остальные
})

export default router
