import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  // {
  //   path: '/register',
  //   component: () => import('@/views/register/index'),
  //   hidden: true
  // },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/admin/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/examination',
    component: Layout,
    redirect: '/examination/see',
    name: 'Exam',
    meta: { title: '管理考试', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'all',
        name: 'All',
        component: () => import('@/views/examination/all/index'),
        meta: { title: '考试', icon: 'list' }
      },
      {
        path: 'release',
        name: 'Release',
        component: () => import('@/views/examination/release/index'),
        meta: { title: '发布考试', icon: 'edit' }
      },
      {
        path: 'paper',
        name: 'Paper',
        component: () => import('@/views/examination/paper/index'),
        meta: { title: '卷库', icon: 'edit' }
      },
      {
        path: 'create',
        name: 'Create',
        component: () => import('@/views/examination/create/index'),
        meta: { title: '创建试卷', icon: 'edit' }
      },
      {
        path: 'composition',
        name: 'Composition',
        component: () => import('@/views/examination/composition/index.vue'),
        meta: { title: '组卷', icon: 'edit' }
      }
    ]
  },

  {
    path: '/question',
    component: Layout,
    redirect: '/question/question-database',
    meta: { title: '管理题目', icon: 'list' },
    children: [{
      path: 'question-database',
      name: 'QuestionDB',
      component: () => import('@/views/question/timuku/index.vue'),
      meta: { title: '题库', icon: 'edit' }
    }, {
      path: 'create-question',
      name: 'CreateQuestion',
      component: () => import('@/views/question/upload/index.vue'),
      meta: { title: '编辑题目', icon: 'edit' }
    }]
  },

  {
    path: '/classroom',
    component: Layout,
    redirect: '/classroom/joined',
    meta: { title: '管理班级', icon: 'list' },
    children: [
      {
        path: 'joined',
        name: 'Joined',
        component: () => import('@/views/classroom/joined/index'),
        meta: { title: '已创建班级', icon: 'education' }
      },
      {
        path: 'join',
        name: 'Join',
        component: () => import('@/views/classroom/join/index'),
        meta: { title: '创建班级', icon: 'peoples' }
      }
    ]
  },

  {
    path: '/correct',
    component: Layout,
    children: [
      {
        path: 'correct',
        name: 'Correct',
        component: () => import('@/views/correct/index'),
        meta: { title: '批改试卷', icon: 'el-icon-finished' }
      }
    ]
  },
  {
    path: '/group',
    component: Layout,
    children: [
      {
        path: 'teacher-group',
        name: 'TeacherGroup',
        component: () => import('@/views/group/index'),
        meta: { title: '教师组', icon: 'peoples' }
      }
    ]
  },

  {
    path: '/personal',
    component: Layout,
    children: [
      {
        path: 'personal',
        name: 'Personal',
        component: () => import('@/views/personal/index'),
        meta: { title: '个人中心', icon: 'user' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
