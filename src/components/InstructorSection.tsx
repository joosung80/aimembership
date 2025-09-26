'use client';

import { Linkedin, Twitter, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface Instructor {
  id: string;
  name: string;
  title: string;
  company: string;
  previousCompany?: string;
  bio: string;
  expertise: string[];
  avatar: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  achievements: string[];
}

const instructors: Instructor[] = [
  {
    id: '1',
    name: '김AI',
    title: 'AI Research Scientist',
    company: 'Google DeepMind',
    previousCompany: 'OpenAI',
    bio: '10년 이상의 AI 연구 경험을 바탕으로 복잡한 AI 개념을 쉽게 설명하는 전문가입니다.',
    expertise: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
    avatar: '👨‍🔬',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    },
    achievements: [
      'Nature AI 논문 15편 게재',
      'Google AI 우수 연구자상 수상',
      '국제 AI 컨퍼런스 키노트 스피커'
    ]
  },
  {
    id: '2',
    name: '박데이터',
    title: 'Principal Data Scientist',
    company: 'Microsoft',
    previousCompany: 'Amazon',
    bio: '대규모 데이터 분석과 AI 모델 구축 분야의 실무 전문가로, 비즈니스 관점에서의 AI 활용에 특화되어 있습니다.',
    expertise: ['Data Science', 'MLOps', 'Business Intelligence', 'Python'],
    avatar: '👩‍💻',
    social: {
      linkedin: '#',
      github: '#'
    },
    achievements: [
      'Microsoft MVP 3년 연속 수상',
      '데이터 사이언스 베스트셀러 저자',
      'Fortune 500 기업 AI 컨설팅'
    ]
  },
  {
    id: '3',
    name: '이에이전트',
    title: 'AI Product Manager',
    company: 'Anthropic',
    previousCompany: 'Meta',
    bio: 'AI 제품 개발과 전략 수립의 전문가로, LangChain과 AI 에이전트 분야의 선구자입니다.',
    expertise: ['LangChain', 'AI Agents', 'Product Strategy', 'API Integration'],
    avatar: '👨‍💼',
    social: {
      linkedin: '#',
      twitter: '#'
    },
    achievements: [
      'LangChain 공식 컨트리뷰터',
      'AI 제품 개발 특허 5건 보유',
      'TechCrunch AI 전문가 패널'
    ]
  },
  {
    id: '4',
    name: '최크리에이터',
    title: 'Creative AI Director',
    company: 'Adobe',
    previousCompany: 'Midjourney',
    bio: '창작 분야에서의 AI 활용 전문가로, 디자인과 콘텐츠 제작의 새로운 패러다임을 제시합니다.',
    expertise: ['Generative AI', 'Creative Tools', 'Design Systems', 'Content Strategy'],
    avatar: '👩‍🎨',
    social: {
      linkedin: '#',
      twitter: '#'
    },
    achievements: [
      'Adobe Creative AI 팀 리드',
      '국제 디자인 어워드 수상',
      'AI 아트 전시회 기획'
    ]
  },
  {
    id: '5',
    name: '정전략가',
    title: 'AI Strategy Consultant',
    company: 'McKinsey & Company',
    previousCompany: 'BCG',
    bio: '기업의 AI 전환을 이끄는 전략 컨설턴트로, 수백 개 기업의 AI 도입을 성공적으로 지원했습니다.',
    expertise: ['AI Strategy', 'Digital Transformation', 'Change Management', 'ROI Analysis'],
    avatar: '👨‍💼',
    social: {
      linkedin: '#'
    },
    achievements: [
      'Fortune 100 기업 AI 전략 수립',
      'Harvard Business Review 기고',
      'AI 전환 성공률 95% 달성'
    ]
  },
  {
    id: '6',
    name: '한노코드',
    title: 'No-Code AI Evangelist',
    company: 'Zapier',
    previousCompany: 'Bubble',
    bio: '코딩 없이도 강력한 AI 애플리케이션을 만들 수 있는 방법을 전파하는 노코드 전문가입니다.',
    expertise: ['No-Code Development', 'Automation', 'Workflow Design', 'Integration'],
    avatar: '👩‍💻',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    },
    achievements: [
      '노코드 커뮤니티 10만+ 멤버',
      'No-Code AI 도구 개발',
      '글로벌 노코드 컨퍼런스 연사'
    ]
  }
];

export default function InstructorSection() {
  return (
    <section className="py-20 bg-white">
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
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">세계 최고 수준</span>의 강사진
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Google, Microsoft, OpenAI 등 글로벌 테크 기업에서 활동하는 현역 AI 전문가들이 직접 가르칩니다
          </p>
        </motion.div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {instructor.avatar}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{instructor.name}</h3>
                <p className="text-blue-600 font-semibold mb-1">{instructor.title}</p>
                <p className="text-gray-600 text-sm">
                  {instructor.company}
                  {instructor.previousCompany && (
                    <span className="block text-xs text-gray-500 mt-1">
                      (전) {instructor.previousCompany}
                    </span>
                  )}
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Bio */}
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                  {instructor.bio}
                </p>

                {/* Expertise */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">전문 분야</h4>
                  <div className="flex flex-wrap gap-2">
                    {instructor.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">주요 성과</h4>
                  <ul className="space-y-1">
                    {instructor.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-xs text-gray-600 flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 pt-4 border-t border-gray-100">
                  {instructor.social.linkedin && (
                    <a
                      href={instructor.social.linkedin}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {instructor.social.twitter && (
                    <a
                      href={instructor.social.twitter}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {instructor.social.github && (
                    <a
                      href={instructor.social.github}
                      className="text-gray-400 hover:text-gray-900 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              이런 강사진과 함께 학습하고 싶다면?
            </h3>
            <p className="text-gray-600 mb-6">
              지금 가입하면 모든 강사의 강의를 무제한으로 수강할 수 있습니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
                강의 목록 보기
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                무료 체험하기
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
