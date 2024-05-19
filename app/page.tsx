import SearchForm from "@/app/components/SearchForm";
import WeatherInfo from "@/app/components/WeatherInfo";
import Map from "@/app/components/Map";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center m-5 gap-10">
        <SearchForm />
        <WeatherInfo />
        <Map />
      </main>
      <footer className="text-center p-4 border-t mt-auto">
        © 2024 Artur Kulembetov. All rights reserved.
      </footer>
    </div>
  );
}
