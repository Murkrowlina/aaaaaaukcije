"use client"
import { useState } from "react"
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import axios from "axios";

export default function page() {
    const [item, setItem] = useState({
        name: "",
        description: "",
        starting_price: 0,
        category: "",
        img_preview: "",
        img_raw: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        await formData.append('image', image.raw);
        await axios
            .post(`http://localhost:3001/uploadImage`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then(res => {
                return res.data;
            });


        // console.log(item)
        // try {
        //     const response = await axios.post("http://localhost:3001/setItem", item, { withCredentials: true })
        // } catch (error) {
        //     console.log(error)
        // }
    }

    const [image, setImage] = useState({
        preview: '',
        raw: '',
    });

    const handlePhotoChange = (e) => {
        if (e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0],
            });
        }
        console.log(image)
    };

    return (
        <div>
            <Navbar></Navbar>
            <main className='flex flex-col items-center gap-[2rem] min-h-screen p-[3rem]'>
                <form onSubmit={handleSubmit} className="flex flex-col items-center gap-10 w-[100%] sm:w-[80%] md:w-[70%] lg:w-[60%] 2xl:w-[50%] text-lg">
                    <div className="flex flex-col gap-5 bg-gray-200 p-5 rounded w-full">
                        <p className="text-xl font-bold text-gray-600">Kategorija</p>
                        <select onChange={e => { setItem({ ...item, category: e.target.value }) }} className="p-3 bg-white text-md border border-gray-400">
                            <option value="0">Odaberite kategoriju</option>
                            <option value="1">Audio, video, foto</option>
                            <option value="2">Filatelija</option>
                            <option value="3">Film i glazba</option>
                            <option value="4">Graditeljstvo i alati</option>
                            <option value="5">Knjige i tisak</option>
                            <option value="6">Kolekcionarstvo</option>
                            <option value="7">Kozmetika i zdravlje</option>
                            <option value="8">Kuća, ured i vrt</option>
                            <option value="9">Numizmatika</option>
                            <option value="10">Odjevni predmeti</option>
                            <option value="11">Računala</option>
                            <option value="12">Satovi i nakit</option>
                            <option value="13">Sport</option>
                            <option value="14">Sve za djecu</option>
                            <option value="15">Telekomunikacija</option>
                            <option value="16">Umjetnine</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-5 bg-gray-200 p-5 rounded w-full">
                        <p className="text-xl font-bold text-gray-600">Detalji predmeta</p>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="naziv" className="font-bold block text-gray-600 cursor-text text-md leading-[140%]">Naziv predmeta</label>
                            <input type="text" required id="naziv" onChange={e => { setItem({ ...item, name: e.target.value }) }} className="rounded border border-gray-400 text-lg leading-[18px] p-[11px]"></input>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-bold block text-gray-600 cursor-text text-md leading-[140%]">Opis predmeta</label>
                            <textarea rows="10" onChange={e => { setItem({ ...item, description: e.target.value }) }} className="rounded border border-gray-400 text-lg leading-[18px] p-[11px]"></textarea>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-lg font-bold text-gray-600">Stanje predmeta</p>
                            <div className="flex flex-row gap-2">
                                <input type="radio" id="new" name="state" value="Novo stanje"></input><label htmlFor="new">Novo</label>
                                <input type="radio" id="used" name="state" value="Korišteno stanje"></input><label htmlFor="used">Korišteno</label>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="cijena" className="font-bold block text-gray-600 cursor-text text-md leading-[140%]">Početna cijena <span className="text-red-600">(upisujete u EUR / €)</span></label>
                            <input type="number" required step=".01" min="0" id="cijena" onChange={e => { setItem({ ...item, starting_price: e.target.value }) }} className="rounded border border-gray-400 text-lg leading-[18px] p-[11px] w-fit"></input>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="image" className="font-bold block text-gray-600 cursor-text text-md leading-[140%]">Choose a profile picture:</label>
                            <input type="file" onChange={handlePhotoChange} id="image" name="image" accept="image/png, image/jpeg"></input>
                        </div>
                    </div>
                    <button type="submit" value="dalje" className="bg-[#0f0e17] text-white hover:bg-[#e53170] p-2 rounded-lg">POSTAVI NA AUKCIJE</button>
                    {/* <div className="flex flex-col gap-5 bg-gray-200 p-5 rounded w-full">
                        <p className="text-xl font-bold text-gray-600">Dostava</p>
                        <div className="flex flex-col gap-1">
                            <p className="text-lg font-bold text-gray-600">Osobno preuzimanje</p>
                            <div className="flex flex-row gap-2">
                                <input type="radio" id="personal" name="state" value="Osobno preuzimanje"></input><label htmlFor="new">Da</label>
                                <input type="radio" id="delivery" name="state" value="Dostava"></input><label htmlFor="used">Ne</label>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="cijena" className="font-bold block text-gray-600 cursor-text text-md leading-[140%]">Početna cijena <span className="text-red-600">(upisujete u EUR / €)</span></label>
                            <input type="number" required step=".01" min="0" id="cijena" className="rounded border border-gray-400 text-lg leading-[18px] p-[11px] w-fit"></input>
                        </div>
                    </div> */}
                </form>
            </main>
            <Footer></Footer>
        </div>
    )
}