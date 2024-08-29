import React from "react";
import Card from "../../Card/Card";
import ProfileLetter from "../../ProfilePicture/ProfileLetter";
import PostInput from "../../../[feed]/PostInput";
import CommentInput from "./CommentInput";
import Comments from "./Comments";
type post = {
  username: string | null | undefined;
  postId: string;
  content: string;
  userId: string;
};
const CommentModal = ({
  isOpen,
  onClose,
  post,
}: {
  isOpen: boolean;
  onClose: () => void;
  post: post;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50 overflow-auto ">
      <div className="w-3/6 mt-11">
        <Card>
          <div>
            <button className="text-white text-3xl" onClick={onClose}>
              &times;
            </button>
          </div>
          <div className="flex flex-col gap-5 text-white">
            <Card>
              <div className="flex gap-3 h-max justify-start ">
                <ProfileLetter>
                  {post.username ? post.username[0].toUpperCase() : ""}
                </ProfileLetter>
                <div className=" w-full flex flex-col gap-2">
                  <p className="text-lg">{post.username}</p>
                  <p>{post.content}</p>
                </div>
              </div>
            </Card>
            <>
              <div className="w-full flex flex-col justify-between gap-1">
                <div className="flex flex-col">
                  <div className="flex gap-2 justify-start items-start">
                    <div className="w-full">
                      <CommentInput postId={post.postId}></CommentInput>
                    </div>
                  </div>
                  <div className="flex w-full mt-2">
                    <Comments postId={post.postId}></Comments>
                  </div>
                </div>
              </div>
            </>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CommentModal;
