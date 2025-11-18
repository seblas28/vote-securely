// Local storage data management for the electoral platform

export interface Candidate {
  id: string;
  name: string;
  party: string;
  proposals: string;
  imageUrl: string;
  category: 'president' | 'mayor' | 'deputy';
}

export interface Vote {
  id: string;
  timestamp: Date;
  president: string;
  mayor: string;
  deputy: string;
}

const STORAGE_KEYS = {
  CANDIDATES: 'electoral_candidates',
  VOTES: 'electoral_votes',
};

// Initialize default candidates
const defaultCandidates: Candidate[] = [
  {
    id: "p1",
    name: "María González",
    party: "Partido del Progreso",
    proposals: "Enfoque en educación universal gratuita, reforma del sistema de salud y creación de empleos en tecnología verde.",
    imageUrl: "/placeholder.svg",
    category: 'president',
  },
  {
    id: "p2",
    name: "Carlos Ramírez",
    party: "Alianza Nacional",
    proposals: "Reducción de impuestos para pequeñas empresas, fortalecimiento de la seguridad ciudadana y apoyo al sector agrícola.",
    imageUrl: "/placeholder.svg",
    category: 'president',
  },
  {
    id: "m1",
    name: "Ana Martínez",
    party: "Movimiento Ciudadano",
    proposals: "Mejora del transporte público, construcción de parques comunitarios y programa de vivienda accesible.",
    imageUrl: "/placeholder.svg",
    category: 'mayor',
  },
  {
    id: "m2",
    name: "José López",
    party: "Partido Verde Local",
    proposals: "Reciclaje obligatorio, incentivos para energía solar y expansión de ciclovías en toda la ciudad.",
    imageUrl: "/placeholder.svg",
    category: 'mayor',
  },
  {
    id: "d1",
    name: "Laura Fernández",
    party: "Partido Progresista",
    proposals: "Leyes de protección al consumidor, transparencia gubernamental y derechos laborales modernos.",
    imageUrl: "/placeholder.svg",
    category: 'deputy',
  },
  {
    id: "d2",
    name: "Roberto Silva",
    party: "Unión Democrática",
    proposals: "Apoyo a la agricultura familiar, reforma educativa y mejora de infraestructura rural.",
    imageUrl: "/placeholder.svg",
    category: 'deputy',
  },
];

export const dataStore = {
  // Candidates
  getCandidates(): Candidate[] {
    const stored = localStorage.getItem(STORAGE_KEYS.CANDIDATES);
    if (!stored) {
      this.setCandidates(defaultCandidates);
      return defaultCandidates;
    }
    return JSON.parse(stored);
  },

  setCandidates(candidates: Candidate[]) {
    localStorage.setItem(STORAGE_KEYS.CANDIDATES, JSON.stringify(candidates));
  },

  addCandidate(candidate: Omit<Candidate, 'id'>) {
    const candidates = this.getCandidates();
    const newCandidate = {
      ...candidate,
      id: `${candidate.category[0]}${Date.now()}`,
    };
    candidates.push(newCandidate);
    this.setCandidates(candidates);
    return newCandidate;
  },

  updateCandidate(id: string, updates: Partial<Candidate>) {
    const candidates = this.getCandidates();
    const index = candidates.findIndex(c => c.id === id);
    if (index !== -1) {
      candidates[index] = { ...candidates[index], ...updates };
      this.setCandidates(candidates);
      return candidates[index];
    }
    return null;
  },

  deleteCandidate(id: string) {
    const candidates = this.getCandidates();
    const filtered = candidates.filter(c => c.id !== id);
    this.setCandidates(filtered);
  },

  // Votes
  getVotes(): Vote[] {
    const stored = localStorage.getItem(STORAGE_KEYS.VOTES);
    if (!stored) return [];
    return JSON.parse(stored).map((v: any) => ({
      ...v,
      timestamp: new Date(v.timestamp),
    }));
  },

  addVote(vote: Omit<Vote, 'id' | 'timestamp'>) {
    const votes = this.getVotes();
    const newVote: Vote = {
      ...vote,
      id: `v${Date.now()}`,
      timestamp: new Date(),
    };
    votes.push(newVote);
    localStorage.setItem(STORAGE_KEYS.VOTES, JSON.stringify(votes));
    return newVote;
  },

  getVoteStats() {
    const votes = this.getVotes();
    const candidates = this.getCandidates();
    
    const stats = {
      president: {} as Record<string, number>,
      mayor: {} as Record<string, number>,
      deputy: {} as Record<string, number>,
    };

    // Initialize counts
    candidates.forEach(c => {
      stats[c.category][c.id] = 0;
    });

    // Count votes
    votes.forEach(vote => {
      if (stats.president[vote.president] !== undefined) {
        stats.president[vote.president]++;
      }
      if (stats.mayor[vote.mayor] !== undefined) {
        stats.mayor[vote.mayor]++;
      }
      if (stats.deputy[vote.deputy] !== undefined) {
        stats.deputy[vote.deputy]++;
      }
    });

    return stats;
  },

  importVotesFromCSV(csvData: string) {
    // Expected CSV format: president_id,mayor_id,deputy_id
    const lines = csvData.split('\n').filter(line => line.trim());
    const votes = this.getVotes();
    
    let imported = 0;
    lines.forEach((line, index) => {
      if (index === 0) return; // Skip header
      const [president, mayor, deputy] = line.split(',').map(s => s.trim());
      if (president && mayor && deputy) {
        votes.push({
          id: `csv${Date.now()}${index}`,
          timestamp: new Date(),
          president,
          mayor,
          deputy,
        });
        imported++;
      }
    });

    localStorage.setItem(STORAGE_KEYS.VOTES, JSON.stringify(votes));
    return imported;
  },
};
