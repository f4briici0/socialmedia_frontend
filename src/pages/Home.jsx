import { CreatePost } from "../components/CreatePostArea";
import { Header } from "../components/Header";
import { PostCard } from "../components/PostCard";

export default function HomePage() {
  return (
    <div
      className="text-zinc-300 min-h-screen pb-28"
      style={{ fontFamily: "Comfortaa", backgroundColor: "#111113" }}
    >
      <Header />

      <main className="max-w-xl mx-auto px-2.5 mt-8">
        <CreatePost />

        {/* Feed Minimalista */}
        <div className="space-y-6">
          <PostCard
            authorName="Luna Estelar"
            timeAgo="há 2 min"
            avatarSrc="https://miro.medium.com/v2/resize:fit:1400/1*rIkmavUeqyRySwlQdA9kKg.jpeg"
            ringColor="ring-lavender-100/20"
            content={
              <>
                Vai são paulooo <span className="text-blue-300">#ain</span>
              </>
            }
            likes={24}
            comments={3}
            showBookmark={true}
          />

          <PostCard
            authorName="Eli Nuvem"
            timeAgo="há 1 hora"
            avatarSrc="https://i.pinimg.com/originals/c7/d5/1b/c7d51b69e121c9b9dc17628c1ab5651b.jpg"
            ringColor="ring-sky-100/20"
            content="O céu estava com uma cor tão linda hoje cedo."
            hasImage={true}
            likes={56}
            comments={12}
          />
        </div>
      </main>
    </div>
  );
}
