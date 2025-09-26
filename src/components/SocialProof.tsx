'use client';

import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

interface Partner {
  name: string;
  logo: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: '김민수',
    role: '데이터 분석가',
    company: '네이버',
    content: 'AI Academy의 강의를 통해 업무 효율성이 300% 향상되었습니다. 특히 ChatGPT 활용법은 정말 실무에 바로 적용할 수 있어서 좋았어요.',
    rating: 5,
    avatar: '👨‍💼'
  },
  {
    id: '2',
    name: '박지영',
    role: '마케팅 매니저',
    company: '카카오',
    content: '코딩을 전혀 모르는 상태에서도 AI 도구들을 활용해서 마케팅 자동화를 구현할 수 있게 되었습니다. 강사님들의 설명이 정말 쉽고 명확해요.',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    id: '3',
    name: '이준호',
    role: 'AI 엔지니어',
    company: '삼성전자',
    content: '실전 프로젝트 중심의 커리큘럼이 인상적이었습니다. 이론만이 아닌 실제 업무에서 사용할 수 있는 스킬들을 배울 수 있어서 만족스럽습니다.',
    rating: 5,
    avatar: '👨‍💻'
  },
  {
    id: '4',
    name: '최수진',
    role: '스타트업 CEO',
    company: '테크스타트업',
    content: '비개발자도 쉽게 따라할 수 있는 AI 앱 개발 강의가 정말 도움이 되었습니다. 우리 회사 서비스에 AI 기능을 추가할 수 있게 되었어요.',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    id: '5',
    name: '정태영',
    role: '프로덕트 매니저',
    company: 'LG전자',
    content: 'AI 전략 수립 강의를 통해 우리 팀의 AI 도입 로드맵을 체계적으로 세울 수 있었습니다. ROI 측정 방법까지 배울 수 있어서 좋았어요.',
    rating: 5,
    avatar: '👨‍💼'
  },
  {
    id: '6',
    name: '한소영',
    role: '콘텐츠 크리에이터',
    company: '프리랜서',
    content: 'Midjourney와 DALL-E 활용법을 배워서 콘텐츠 제작 시간이 절반으로 줄었습니다. 퀄리티는 오히려 더 좋아졌어요!',
    rating: 5,
    avatar: '👩‍🎨'
  }
];

const partners: Partner[] = [
  { name: 'Google', logo: 'Google' },
  { name: 'Microsoft', logo: 'Microsoft' },
  { name: 'Amazon', logo: 'Amazon' },
  { name: 'Meta', logo: 'Meta' },
  { name: 'OpenAI', logo: 'OpenAI' },
  { name: 'Anthropic', logo: 'Anthropic' },
  { name: 'Nvidia', logo: 'Nvidia' },
  { name: 'Tesla', logo: 'Tesla' }
];

export default function SocialProof() {
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
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">10,000+</span> 수강생들의 생생한 후기
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            다양한 분야의 전문가들이 AI Academy를 통해 어떤 변화를 경험했는지 확인해보세요
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
            <div className="text-gray-600">만족한 수강생</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">4.9/5</div>
            <div className="text-gray-600">평균 만족도</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">95%</div>
            <div className="text-gray-600">강의 완주율</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-600 mb-2">300%</div>
            <div className="text-gray-600">평균 생산성 향상</div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-8 h-8 text-blue-200" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-2xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            글로벌 기업들과 함께하는 AI 교육
          </h3>
          <p className="text-gray-600 mb-12">
            우리 수강생들이 재직 중인 회사들과 교육 파트너십을 맺고 있습니다
          </p>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <div className="text-gray-400 font-bold text-lg hover:text-gray-600 transition-colors cursor-pointer">
                  {partner.logo}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                당신도 성공 스토리의 주인공이 되어보세요
              </h3>
              <p className="text-blue-100 mb-6">
                지금 시작하면 7일 무료 체험과 함께 첫 달 50% 할인 혜택을 받을 수 있습니다
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  무료 체험 시작하기
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  성공 사례 더 보기
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
