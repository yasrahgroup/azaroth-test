import { InsightArticle, CaseStudy } from '../types';

export const insightsArticles: InsightArticle[] = [
  {
    id: 'art-1',
    slug: 'scaling-event-streaming-zero-data-loss',
    title: 'Architecting Event-Driven Streaming Pipelines with Zero Data Loss at 10M Events/Sec',
    category: 'System Architecture',
    readTime: '6 min read',
    publishedDate: 'October 2026',
    author: {
      name: 'Faizur Rahman',
      role: 'Principal Solutions Architect',
    },
    excerpt: 'How we engineered a fault-tolerant event processing architecture using partitioned streaming buffers, exactly-once deduplication keys, and distributed cold-storage syncing.',
    content: [
      'In high-concurrency transactional architectures, even a 0.001% data packet drop rate translates to thousands of lost financial records or broken downstream microservices. Building systems that guarantee exactly-once delivery at massive volume requires abandoning simplistic queues in favor of distributed partitioned log structures.',
      'Our approach leverages distributed append-only journals combined with client-side idempotency hashing. When upstream clients push transactional payloads, an idempotent SHA-256 fingerprint is immediately assigned and stored in an ultra-fast in-memory Bloom filter before persisting into partitioned write-ahead logs.',
      'By decoupling ingestion buffers from analytical consumers, the architecture achieves a sustained P99 latency of 4.2ms while surviving complete regional node outages without dropping a single in-flight event.',
      'When designing for enterprise scale, remember: simplicity in contract boundaries yields predictability in distributed fault domains.',
    ],
    sections: [
      { id: 'overview', title: 'Overview' },
      { id: 'architecture', title: 'Architecture Pattern' },
      { id: 'takeaways', title: 'Key Takeaways' },
    ],
    tags: ['Architecture', 'Kafka', 'Streaming', 'Microservices', 'Zero-Loss'],
  },
  {
    id: 'art-2',
    slug: 'private-enterprise-ai-rag-architectures',
    title: 'Building Air-Gapped Enterprise AI: Zero Data Leakage RAG Systems in Regulated Environments',
    category: 'Enterprise AI',
    readTime: '8 min read',
    publishedDate: 'September 2026',
    author: {
      name: 'V. Sundar',
      role: 'Director of Cloud & AI Systems',
    },
    excerpt: 'A blueprint for deploying private large language models with real-time vector search inside strict SOC 2 and HIPAA security boundaries without public API exposure.',
    content: [
      'Enterprise adoption of generative AI has frequently stalled at the security boundary. Corporate legal and compliance teams rightfully reject sending proprietary intellectual property and customer records across multi-tenant commercial LLM endpoints.',
      'The modern enterprise solution is private RAG (Retrieval-Augmented Generation) hosted entirely within dedicated VPC or on-premise Kubernetes clusters using quantized open-weights models and hardware-accelerated inference engines.',
      'In this architecture, document ingestion pipelines automatically tokenize, redact PII via local transformer models, and index vector embeddings into dedicated Qdrant or Milvus clusters with granular row-level access permissions.',
      'The result is enterprise-grade contextual intelligence that operates under strict zero-data-retention guarantees, fulfilling both regulatory standards and executive velocity goals.',
    ],
    sections: [
      { id: 'risk', title: 'Security Risk' },
      { id: 'architecture', title: 'Private RAG Design' },
      { id: 'outcome', title: 'Operational Outcome' },
    ],
    tags: ['AI', 'RAG', 'VectorDB', 'Zero-Trust', 'HIPAA'],
  },
  {
    id: 'art-3',
    slug: 'zero-downtime-monolith-to-microservice-migration',
    title: 'The Strangler Fig Pattern: Migrating Core Monoliths to Microservices with Zero Downtime',
    category: 'Cloud Modernization',
    readTime: '7 min read',
    publishedDate: 'August 2026',
    author: {
      name: 'A. K. Sharma',
      role: 'Head of Pod Engineering',
    },
    excerpt: 'Step-by-step strategies for deconstructing multi-gigabyte monolithic databases and application cores using dynamic reverse proxy routing and dual-write synchronizations.',
    content: [
      'The most dangerous decision an enterprise can make is a "Big Bang" rewrite of an active production monolith. Systems that took a decade to build contain countless undocumented domain edge cases that cannot be cleanly replicated in a single simultaneous cutover.',
      'The Strangler Fig design pattern provides an incremental, zero-risk pathway. By placing an intelligent API gateway at the edge, individual functional domains (e.g., Auth, Inventory, Billing) are systematically intercepted and directed to modern microservices while the legacy core continues operating seamlessly.',
      'Dual-write data synchronization with automated reconciliation background workers guarantees parity between legacy relational tables and new distributed event streams during the multi-month transition period.',
      'Only once the new services demonstrate 99.99% reliability under production load is the legacy module permanently retired.',
    ],
    sections: [
      { id: 'risk', title: 'Migration Risk' },
      { id: 'strategy', title: 'Fallback Strategy' },
      { id: 'migration', title: 'Controlled Migration' },
    ],
    tags: ['Modernization', 'Microservices', 'DevOps', 'Cloud', 'Kubernetes'],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs-1',
    slug: 'global-fintech-transaction-engine',
    clientIndustry: 'Global Fintech & Digital Banking',
    title: 'Modernizing a High-Concurrency Transaction Engine for 5M Daily Active Users',
    summary: 'Azaroth Tech-Hive designed a distributed microservices mesh replacing legacy batch processing with real-time settlement.',
    metrics: [
      { label: 'Latency Reduction', value: '78%' },
      { label: 'Uptime SLA', value: '99.995%' },
      { label: 'Monthly Cloud Savings', value: '42%' },
      { label: 'Throughput', value: '25k TPS' },
    ],
    challenge: 'A Tier-1 financial institution faced escalating database lockouts and hour-long batch delays during peak market hours, threatening regulatory compliance and client satisfaction.',
    solution: 'Our engineering pod designed and executed an event-driven CQRS (Command Query Responsibility Segregation) pipeline built on Rust and Go microservices with Redis cluster caching and active-active multi-region database failover.',
    architectureHighlights: [
      'Sub-10ms transaction confirmation across distributed regional nodes',
      'Automated disaster recovery cutover executing in under 60 seconds',
      'Bank-grade TLS 1.3 mutual authentication across all service meshes',
      'Zero production downtime throughout the 6-month migration lifecycle',
    ],
  },
  {
    id: 'cs-2',
    slug: 'healthcare-telehealth-platform-scale',
    clientIndustry: 'Enterprise Health Systems',
    title: 'Scalable Telehealth & Clinical Intelligence Platform with Strict HIPAA Compliance',
    summary: 'Architecting an end-to-end encrypted clinical consultation system integrating autonomous diagnostic assistance.',
    metrics: [
      { label: 'Active Clinical Providers', value: '12,000+' },
      { label: 'Video P99 Jitter', value: '< 8ms' },
      { label: 'HIPAA & SOC 2', value: '100% Compliant' },
      { label: 'Consultations Logged', value: '1.2M+' },
    ],
    challenge: 'Sudden user expansion led to severe media server degradation and manual bottlenecks in clinical chart documentation.',
    solution: 'We engineered an elastic WebRTC media routing architecture paired with a private on-premise clinical speech transcription model that generates structured FHIR records automatically.',
    architectureHighlights: [
      'Zero-knowledge end-to-end encryption for video and audio streams',
      'Automated clinical summary generation saving doctors 14 hours per week',
      'Federated identity integration with enterprise Epic and Cerner EHRs',
    ],
  },
];
