'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function FormularInscriere() {
  const [formData, setFormData] = useState({
    // Date copil
    numeCopil: '',
    prenumeCopil: '',
    dataNasterii: '',
    varstaCopil: '',
    
    // Date părinte
    numeParinte: '',
    prenumeParinte: '',
    telefon: '',
    email: '',
    adresa: '',
    localitate: '',
    judet: '',
    cnpParinte: '',
    serieCI: '',
    numarCI: '',
    
    cursuri: [] as string[],
    experienta: ''
  })

  const cursuri = [
    { id: 'robotica', nume: 'Robotică', emoji: '🤖', culoare: 'from-blue-500 to-blue-700' },
    { id: 'programare', nume: 'Programare', emoji: '💻', culoare: 'from-purple-500 to-purple-700' },
    { id: 'stem', nume: 'STEM', emoji: '🔬', culoare: 'from-green-500 to-green-700' }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  const toggleCurs = (cursId: string) => {
    setFormData(prev => ({
      ...prev,
      cursuri: prev.cursuri.includes(cursId) 
        ? prev.cursuri.filter(id => id !== cursId)
        : [...prev.cursuri, cursId]
    }))
  }

  return (
    <div className="max-w-4xl mx-auto">
{/* Header cu logo și titlu - Versiune optimizată pentru tableta/mobil */}
<div className="text-center mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 
                text-white p-4 md:p-8 rounded-2xl shadow-2xl transform hover:scale-[1.02] 
                transition-transform animate-gradient bg-[length:200%_200%] relative">
  <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
    {/* Logo */}
    <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
      <Image
        src="/images/logo.png"
        alt="TechMinds Academy"
        width={128}
        height={128}
        className="object-contain"
      />
    </div>
    
    {/* Text content */}
    <div className="flex-1 text-center md:text-right">
      {/* Formular text cu font diferit și dimensiune mai mică */}
      <h1 className="text-sm md:text-lg font-normal mb-2 opacity-90 font-mono">
        Formular înscriere TechMinds Academy
      </h1>
      
      {/* Titlu principal centrat */}
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        Vino în lumea STEM! 🚀
      </h2>
      
      {/* Subtitlu */}
      <p className="text-base md:text-xl opacity-90">
        Descoperă universul fascinant al roboticii și programării
      </p>
    </div>
  </div>
</div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Secțiunea Date Copil */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg
                        transform hover:shadow-xl transition-all">
          <h2 className="text-2xl font-bold mb-4 text-blue-800 flex items-center gap-2">
            <span>👶 Date Copil</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nume Copil</label>
              <input
                type="text"
                value={formData.numeCopil}
                onChange={(e) => setFormData({...formData, numeCopil: e.target.value})}
                className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 
                          focus:border-blue-500 transition-all"
                placeholder="Numele copilului"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Prenume Copil</label>
              <input
                type="text"
                value={formData.prenumeCopil}
                onChange={(e) => setFormData({...formData, prenumeCopil: e.target.value})}
                className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 
                          focus:border-blue-500 transition-all"
                placeholder="Prenumele copilului"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Data Nașterii</label>
              <input
                type="date"
                value={formData.dataNasterii}
                onChange={(e) => setFormData({...formData, dataNasterii: e.target.value})}
                className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 
                          focus:border-blue-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Vârsta</label>
              <select
                value={formData.varstaCopil}
                onChange={(e) => setFormData({...formData, varstaCopil: e.target.value})}
                className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 
                          focus:border-blue-500 transition-all"
              >
                <option value="">Selectează vârsta</option>
                {[...Array(7)].map((_, i) => (
                  <option key={i + 8} value={i + 8}>{i + 8} ani</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {/* Secțiunea Date Părinte */}
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl shadow-lg
                        transform hover:shadow-xl transition-all">
          <h2 className="text-2xl font-bold mb-4 text-purple-800 flex items-center gap-2">
            <span>👨‍👩‍👧‍👦 Date Părinte/Tutore Legal</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nume</label>
              <input
                type="text"
                value={formData.numeParinte}
                onChange={(e) => setFormData({...formData, numeParinte: e.target.value})}
                className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 
                          focus:border-purple-500 transition-all"
                placeholder="Numele părintelui"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Prenume</label>
              <input
                type="text"
                value={formData.prenumeParinte}
                onChange={(e) => setFormData({...formData, prenumeParinte: e.target.value})}
                className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 
                          focus:border-purple-500 transition-all"
                placeholder="Prenumele părintelui"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">CNP</label>
              <input
                type="text"
                value={formData.cnpParinte}
                onChange={(e) => setFormData({...formData, cnpParinte: e.target.value})}
                className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 
                          focus:border-purple-500 transition-all"
                placeholder="CNP părinte"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Serie CI</label>
                <input
                  type="text"
                  value={formData.serieCI}
                  onChange={(e) => setFormData({...formData, serieCI: e.target.value})}
                  className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 
                            focus:border-purple-500 transition-all"
                  placeholder="Serie CI"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Număr CI</label>
                <input
                  type="text"
                  value={formData.numarCI}
                  onChange={(e) => setFormData({...formData, numarCI: e.target.value})}
                  className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 
                            focus:border-purple-500 transition-all"
                  placeholder="Număr CI"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Adresa</label>
              <input
                type="text"
                value={formData.adresa}
                onChange={(e) => setFormData({...formData, adresa: e.target.value})}
                className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 
                          focus:border-purple-500 transition-all"
                placeholder="Strada, număr, bloc, scara, apartament"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Localitate</label>
              <input
                type="text"
                value={formData.localitate}
                onChange={(e) => setFormData({...formData, localitate: e.target.value})}
                className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 
                          focus:border-purple-500 transition-all"
                placeholder="Localitatea"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Județ</label>
              <input
                type="text"
                value={formData.judet}
                onChange={(e) => setFormData({...formData, judet: e.target.value})}
                className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 
                          focus:border-purple-500 transition-all"
                placeholder="Județul"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
              <input
                type="tel"
                value={formData.telefon}
                onChange={(e) => setFormData({...formData, telefon: e.target.value})}
                className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 
                          focus:border-purple-500 transition-all"
                placeholder="07xx xxx xxx"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 
                          focus:border-purple-500 transition-all"
                placeholder="email@exemplu.com"
              />
            </div>
          </div>
        </div>

        {/* Secțiunea Cursuri */}
        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-xl shadow-lg
                        transform hover:shadow-xl transition-all">
          <h2 className="text-2xl font-bold mb-4 text-yellow-800 flex items-center gap-2">
            <span>📚 Cursuri Disponibile</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cursuri.map(curs => (
              <button
                key={curs.id}
                type="button"
                onClick={() => toggleCurs(curs.id)}
                className={`p-4 rounded-xl shadow-md flex flex-col items-center justify-center gap-2
                           transform transition-all hover:-translate-y-1 hover:shadow-lg text-lg font-semibold
                           ${formData.cursuri.includes(curs.id) 
                             ? `bg-gradient-to-r ${curs.culoare} text-white` 
                             : 'bg-white hover:bg-gray-50'}`}
              >
                <span className="text-3xl">{curs.emoji}</span>
                <span>{curs.nume}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Secțiunea Experiență */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl shadow-lg
                        transform hover:shadow-xl transition-all">
          <h2 className="text-2xl font-bold mb-4 text-green-800 flex items-center gap-2">
            <span>🎯 Nivel Experiență</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Începător', 'Intermediar', 'Avansat'].map((nivel) => (
              <button
                key={nivel}
                type="button"
                onClick={() => setFormData({...formData, experienta: nivel})}
                className={`p-4 rounded-xl shadow-md text-center font-semibold text-lg
                           transform transition-all hover:-translate-y-1 hover:shadow-lg
                           ${formData.experienta === nivel
                             ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                             : 'bg-white hover:bg-gray-50'}`}
              >
                {nivel}
              </button>
            ))}
          </div>
        </div>

        {/* Buton Submit */}
        <button
          type="submit"
          className="w-full p-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 
                     text-white text-xl font-bold rounded-xl shadow-lg
                     transform hover:scale-[1.02] transition-all
                     animate-gradient bg-[length:200%_200%]"
        >
          Înscrie-te Acum! 🚀
        </button>
      </form>
    </div>
  )
}