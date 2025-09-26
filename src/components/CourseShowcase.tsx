'use client';

import { useState } from 'react';
import { Clock, Users, Star, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  instructor: string;
  thumbnail: string;
  duration: number;
  students: number;
  rating: number;
  tags: string[];
}

const mockCourses: Course[] = [
  {
    id: '1',
    title: 'ChatGPT로 업무 자동화 마스터하기',
    description: '일상 업무를 AI로 자동화하여 생산성을 10배 높이는 실전 가이드',
    category: '업무자동화',
    difficulty: 'beginner',
    instructor: '김AI',
    thumbnail: '/api/placeholder/400/250',
    duration: 180,
    students: 2847,
    rating: 4.9,
    tags: ['ChatGPT', '자동화', '생산성']
  },
  {
    id: '2',
    title: 'Python으로 데이터 분석 AI 구축하기',
    description: '머신러닝과 딥러닝을 활용한 실전 데이터 분석 프로젝트',
    category: '데이터분석',
    difficulty: 'intermediate',
    instructor: '박데이터',
    thumbnail: '/api/placeholder/400/250',
    duration: 240,
    students: 1923,
    rating: 4.8,
    tags: ['Python', '머신러닝', '데이터분석']
  },
  {
    id: '3',
    title: 'AI 에이전트 개발 완전정복',
    description: 'LangChain과 OpenAI API를 활용한 지능형 AI 에이전트 구축',
    category: 'AI개발',
    difficulty: 'advanced',
    instructor: '이에이전트',
    thumbnail: '/api/placeholder/400/250',
    duration: 320,
    students: 1456,
    rating: 4.9,
    tags: ['LangChain', 'OpenAI', 'AI에이전트']
  },
  {
    id: '4',
    title: 'Midjourney & DALL-E 이미지 생성 마스터',
    description: 'AI 이미지 생성 도구를 활용한 창작 및 비즈니스 활용법',
    category: '창작도구',
    difficulty: 'beginner',
    instructor: '최크리에이터',
    thumbnail: '/api/placeholder/400/250',
    duration: 150,
    students: 3241,
    rating: 4.7,
    tags: ['Midjourney', 'DALL-E', '이미지생성']
  },
  {
    id: '5',
    title: '비즈니스를 위한 AI 전략 수립',
    description: 'AI 도입부터 ROI 측정까지, 기업 AI 전략의 모든 것',
    category: '비즈니스',
    difficulty: 'intermediate',
    instructor: '정전략가',
    thumbnail: '/api/placeholder/400/250',
    duration: 200,
    students: 987,
    rating: 4.8,
    tags: ['비즈니스', 'AI전략', 'ROI']
  },
  {
    id: '6',
    title: '코딩 없이 만드는 AI 앱',
    description: 'No-Code 도구로 누구나 쉽게 AI 애플리케이션 개발하기',
    category: 'NoCode',
    difficulty: 'beginner',
    instructor: '한노코드',
    thumbnail: '/api/placeholder/400/250',
    duration: 120,
    students: 2156,
    rating: 4.6,
    tags: ['NoCode', 'AI앱', '쉬운개발']
  }
];

const categories = ['전체', '업무자동화', '데이터분석', 'AI개발', '창작도구', '비즈니스', 'NoCode'];
const difficulties = ['전체', 'beginner', 'intermediate', 'advanced'];

const difficultyLabels = {
  beginner: '입문',
  intermediate: '중급',
  advanced: '고급'
};

const difficultyColors = {
  beginner: 'bg-green-100 text-green-800',
  intermediate: 'bg-yellow-100 text-yellow-800',
  advanced: 'bg-red-100 text-red-800'
};

export default function CourseShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedDifficulty, setSelectedDifficulty] = useState('전체');
  const [showFilters, setShowFilters] = useState(false);

  const filteredCourses = mockCourses.filter(course => {
    const categoryMatch = selectedCategory === '전체' || course.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === '전체' || course.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            실전 중심의 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI 강의</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            업계 최고 전문가들이 직접 설계한 커리큘럼으로 실무에 바로 적용할 수 있는 AI 스킬을 배워보세요
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              <Filter className="w-4 h-4 mr-2" />
              필터
            </button>
          </div>

          {/* Filter Options */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3">카테고리</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3">난이도</h3>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((difficulty) => (
                  <button
                    key={difficulty}
                    onClick={() => setSelectedDifficulty(difficulty)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedDifficulty === difficulty
                        ? 'bg-purple-600 text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {difficulty === '전체' ? difficulty : difficultyLabels[difficulty as keyof typeof difficultyLabels]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Course Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">🤖</div>
                </div>
                
                {/* Difficulty Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[course.difficulty]}`}>
                    {difficultyLabels[course.difficulty]}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                  <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                  <span className="text-xs font-medium">{course.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <div className="text-sm text-blue-600 font-medium mb-2">{course.category}</div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {course.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {Math.floor(course.duration / 60)}시간 {course.duration % 60}분
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students.toLocaleString()}명
                  </div>
                </div>
                
                {/* Instructor */}
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-700">
                    강사: <span className="font-medium">{course.instructor}</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                    자세히 보기 →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
            더 많은 강의 보기
          </button>
        </motion.div>
      </div>
    </section>
  );
}
