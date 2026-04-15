import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-50 dark:bg-slate-950/50">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-cyan-600 dark:text-cyan-400 text-sm mb-2 tracking-widest uppercase">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">연락하기</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg mb-10">
            새로운 기회나 협업 제안은 언제든 환영합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* 이메일 주소를 여기에 입력하세요 */}
            <a
              href="mailto:zy12yeah@gmail.com"
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors inline-flex items-center gap-2 justify-center"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              이메일 보내기
            </a>
            <a
              href="https://github.com/zy12yeah"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-slate-300 dark:border-slate-600 hover:border-slate-500 dark:hover:border-slate-400 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg transition-colors inline-flex items-center gap-2 justify-center"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
