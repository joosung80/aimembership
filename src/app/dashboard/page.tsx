'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BookOpen, Clock, Award, TrendingUp, Play, Users, Calendar, Star } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/auth/login?redirect=/dashboard');
        return;
      }
      
      // Get user profile
      const { data: profile } = await supabase
        .from('users')
        .select('*')
        .eq('id', session.user.id)
        .single();
      
      if (profile) {
        setUser(profile);
      } else {
        // Create profile if it doesn't exist
        const newUser = {
          id: session.user.id,
          email: session.user.email || '',
          name: session.user.user_metadata?.name || session.user.user_metadata?.full_name || session.user.email || '',
          subscription_plan: null,
          subscription_status: null
        };
        
        const { data: insertedUser } = await supabase
          .from('users')
          .insert([newUser])
          .select()
          .single();
        
        setUser(insertedUser || {
          ...newUser,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        });
      }
      setLoading(false);
    };

    getUser();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">로딩 중...</p>
        </div>
      </div>
    );
  }

  const stats = [
    {
      name: '수강 중인 강의',
      value: '12',
      icon: BookOpen,
      color: 'bg-blue-500',
      change: '+2',
      changeType: 'positive',
    },
    {
      name: '학습 시간',
      value: '47h',
      icon: Clock,
      color: 'bg-green-500',
      change: '+5h',
      changeType: 'positive',
    },
    {
      name: '완료한 프로젝트',
      value: '8',
      icon: Award,
      color: 'bg-purple-500',
      change: '+3',
      changeType: 'positive',
    },
    {
      name: '학습 진도',
      value: '73%',
      icon: TrendingUp,
      color: 'bg-orange-500',
      change: '+12%',
      changeType: 'positive',
    },
  ];

  const recentCourses = [
    {
      id: 1,
      title: 'ChatGPT로 업무 자동화 마스터하기',
      progress: 85,
      lastWatched: '2일 전',
      duration: '2시간 30분',
      thumbnail: '🤖',
    },
    {
      id: 2,
      title: 'Python으로 데이터 분석 AI 구축하기',
      progress: 60,
      lastWatched: '1주 전',
      duration: '4시간',
      thumbnail: '🐍',
    },
    {
      id: 3,
      title: 'AI 에이전트 개발 완전정복',
      progress: 30,
      lastWatched: '3일 전',
      duration: '5시간 20분',
      thumbnail: '🚀',
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'AI 트렌드 라이브 세션',
      date: '2024년 1월 15일',
      time: '오후 8:00',
      type: 'live',
    },
    {
      id: 2,
      title: '1:1 멘토링 세션',
      date: '2024년 1월 18일',
      time: '오후 2:00',
      type: 'mentoring',
    },
    {
      id: 3,
      title: 'AI 프로젝트 발표회',
      date: '2024년 1월 25일',
      time: '오후 7:00',
      type: 'event',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              안녕하세요, {user?.name || user?.email}님! 👋
            </h1>
            <p className="text-gray-600">
              오늘도 새로운 AI 지식을 배워보세요
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.name} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center">
                    <div className={`${stat.color} p-3 rounded-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                      <div className="flex items-center">
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        <span className={`ml-2 text-sm font-medium ${
                          stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {stat.change}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Courses */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">최근 수강 강의</h2>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    전체 보기
                  </button>
                </div>
                
                <div className="space-y-4">
                  {recentCourses.map((course) => (
                    <div key={course.id} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-2xl mr-4">
                        {course.thumbnail}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{course.title}</h3>
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.duration} • {course.lastWatched}
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{course.progress}% 완료</div>
                      </div>
                      <button className="ml-4 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        <Play className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Events */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">다가오는 일정</h2>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-start p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <Calendar className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm">{event.title}</h4>
                        <p className="text-xs text-gray-600 mt-1">{event.date}</p>
                        <p className="text-xs text-gray-600">{event.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">빠른 실행</h2>
                <div className="space-y-3">
                  <button className="w-full flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-left">
                    <BookOpen className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-sm font-medium text-gray-900">새 강의 시작하기</span>
                  </button>
                  <button className="w-full flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors text-left">
                    <Users className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-sm font-medium text-gray-900">커뮤니티 참여하기</span>
                  </button>
                  <button className="w-full flex items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors text-left">
                    <Award className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-sm font-medium text-gray-900">수료증 다운로드</span>
                  </button>
                </div>
              </div>

              {/* Achievement */}
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-lg p-6 text-white">
                <div className="flex items-center mb-4">
                  <Star className="w-6 h-6 mr-2" />
                  <h3 className="font-bold">이번 주 성취</h3>
                </div>
                <p className="text-sm opacity-90 mb-4">
                  3개의 새로운 강의를 완료했습니다! 🎉
                </p>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-xs opacity-75 mb-1">다음 목표까지</div>
                  <div className="flex items-center">
                    <div className="flex-1 bg-white/20 rounded-full h-2 mr-2">
                      <div className="bg-white h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                    <span className="text-xs font-medium">70%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
