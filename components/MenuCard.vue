<template>
  <div class="card">
    <div class="card">
      <ul class="list">
        <li class="item favorite">
          <input type="checkbox" class="input" />
          <span class="label">Opción 1</span>
          <span class="label fav-label">Alt 1</span>
          <i class="bi bi-gear"></i>
        </li>
        <li class="item rename">
          <span class="label">Editable</span>
          <input class="toogler" type="checkbox" />
          <label class="input-container">
            <input class="input" type="text" />
            <div class="icons">
              <i class="bi bi-gear"></i>
            </div>
          </label>
          <i class="bi bi-gear"></i>
        </li>
      </ul>
      <div class="separator"></div>
      <ul class="list">
        <li class="item">
          <span class="label">Item 1</span>
          <i class="bi bi-gear"></i>
        </li>
        <li class="item">
          <span class="label">Item 2</span>
          <i class="bi bi-gear"></i>
        </li>
        <li class="item">
          <span class="label">Item 3</span>
          <i class="bi bi-gear"></i>
        </li>
        <li class="item">
          <span class="label">Item 4</span>
          <i class="bi bi-gear"></i>
        </li>
        <li class="item">
          <span class="label">Item 5</span>
          <i class="bi bi-gear"></i>
        </li>
      </ul>
      <div class="separator"></div>
      <ul class="list">
        <li class="item delete">
          <span class="label">Borrar</span>
          <span class="label action">Confirmar</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-trash-2"
          >
            <path d="M3 6h18"></path>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            <line x1="10" x2="10" y1="11" y2="17"></line>
            <line x1="14" x2="14" y1="11" y2="17"></line>
          </svg>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.card {
  background: var(--text-color);
  width: 260px;
  border: 2px solid #313131;
  border-radius: 10px;
  padding: 3px 4px;

  .separator {
    width: 100%;
    border: 1px solid #444444;
    border-radius: 10px;
    margin: 5px 0px;
  }

  .list {
    color: var(--background-color);
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 3px;

    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 0.3s ease;
      padding: 6px 8px;
      border-radius: 5px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      user-select: none;

      svg {
        z-index: 1;
        transition: all 0.3s ease;
      }
      &:hover {
        background: #333333;
      }

      .label {
        font-weight: 400;
        transition: all 0.2s ease;
      }

      &.favorite {
        .fav-label {
          position: absolute;
          transform: translateY(-100%) translateX(-15px) scale(0.8);
          opacity: 0;
        }

        .input {
          width: 100%;
          height: 100%;
          position: absolute;
          appearance: none;
          cursor: pointer;
          z-index: 100;
        }

        .input:checked ~ .fav-label {
          transform: translateY(0);
          opacity: 1;
        }

        .input:checked ~ .label:not(.fav-label) {
          transform: translateY(110%) translateX(-6px) scale(0.8);
          opacity: 0;
        }
        .input:checked ~ svg {
          fill: #fff;
        }
      }

      &.delete {
        color: #e3616a;
        position: relative;
        &:hover {
          background: #6b2c2b;
        }

        .label {
          transform: translateY(0);
        }

        &:active {
          .label {
            opacity: 0;
            visibility: hidden;
            transform: translateY(100%) translateX(-15px) scale(0.8);
          }
          .action {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }

          &:before {
            animation: delete 2.5s ease-in-out forwards 0.2s;
          }
        }

        .action {
          position: absolute;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-50%) translateX(-15px) scale(0.8);
        }

        &::before {
          content: "";
          position: absolute;
          background-color: #89302d;
          left: 0;
          top: 0;
          height: 100%;
        }
      }

      &.rename {
        &:has(.toogler:checked:nth-of-type(1)) {
          background-color: #333333;
          overflow: hidden;
          .label {
            opacity: 0;
            transform: translateY(100%);
          }
          > svg {
            transform: translateY(130%);
          }

          .input-container {
            transform: translateY(0);

            .icons {
              top: 50%;
            }
          }
        }

        .toogler {
          position: absolute;
          appearance: none;
          width: 100%;
          height: 100%;
        }

        .input-container {
          transform: translateY(-100%);
          width: 100%;
          position: absolute;

          .input {
            width: 75%;
            background: transparent;
            border: none;
            outline: none;
            height: 100%;
            color: #fff;
            padding: 8px 8px;
            font-size: 17px;
            z-index: 100;
          }

          .icons {
            position: absolute;
            top: -50%;
            right: 0%;
            transform: translate(-50%, -50%);
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.3s ease;
            gap: 8px;
            svg {
              background-color: #565656;
              border-radius: 4px;
              cursor: pointer;
              transition: all 0.3s ease;
              &:hover {
                background-color: #757575;
              }
            }
          }
        }
      }
    }
  }
}

@keyframes delete {
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
}
</style>
