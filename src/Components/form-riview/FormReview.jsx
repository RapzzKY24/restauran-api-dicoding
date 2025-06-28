"use client";
import React, { useState } from "react";

const FormReview = ({ restaurantId }) => {
  const [review, setReview] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !review.trim()) {
      alert("Cannot submit empty fields.");
      return;
    }

    const newReview = {
      id: crypto.randomUUID(),
      name: name.trim(),
      review: review.trim(),
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/review`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...newReview, id: restaurantId }),
        }
      );

      const data = await res.json();

      if (!res.ok || data.error) {
        alert("Gagal mengirim review.");
      } else {
        alert("Review berhasil dikirim!");
        setName("");
        setReview("");
      }
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan saat mengirim review.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 mt-6 max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
    >
      <div>
        <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-200">
          Nama Anda
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nama Anda"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
      </div>
      <div>
        <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-200">
          Tulis Review
        </label>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Tulis review..."
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors font-semibold"
      >
        Kirim Review
      </button>
    </form>
  );
};

export default FormReview;
